import Component from "@glimmer/component";
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class LessonComponent extends Component {
  queryParams = ['user_id']
  @service data;
  @service user;

  @tracked client = null;
  @tracked userLevels = [];
  @tracked userTopics = [];
  @tracked levels = [];
  @tracked topics = [];
  @tracked words = [];

  userLesson = [];
  @tracked message = '';

  query() {
    const qps = location.search;
    const object = {}
    const _query = qps.split('?')[1]

    if (_query.length) {
      const list = _query.split('&');
      list.forEach((_value) => {
        const [key, value] = _value.split('=');
        object[key] = value;
      })
    }

    return object;
  }

  constructor() {
    super(...arguments);

    this.getUserByID()
      .then(async () => {
        this.getLevels().then((levels) => {
          this.getUserLevel(levels)
          this.getUserTopic()
        })
      });
  }

  showMessage(message, timeout) {
    this.message = message;
    setTimeout(() => this.message = null, timeout);
  }

  error(err) {
    console.log('ERROR', err)
  }

  @action
  setWordStatus(word) {
    const activeTopic = this.topics.find(topic => topic.active)
    let userTopic = this.userTopics.find(topic => topic.topic_uuid === activeTopic.uuid)
    let userTopicIndex = this.userTopics.findIndex(topic => topic.topic_uuid === activeTopic.uuid)

    if (!userTopic) {
      return new Error('userTopic is not created before')
    }

    let progress = Array.from(new Set([
      ...userTopic.progress,
      word.id.toString()
    ]))

    this.user.updateUserTopic(userTopic.id, {
      ...userTopic,
      level_uuid: activeTopic.level_uuid,
      topic_uuid: userTopic.topic_uuid,
      user_uuid: this.user.uuid,
      progress
    })
      .then((data) => {
        userTopic.progress = data.progress;
        userTopic.updated_at = data.updated_at;

        if (userTopic.progress.length >= this.words.length) {
          this.user.updateUserTopic(userTopic.id, {
            status: 1,
          })
            .then(data => this.userTopics[userTopicIndex] = data)
            .then(this.syncUserTopicWithTopic.bind(this));
        }
      })
      .catch(this.error)
  }

  syncUserTopicWithTopic() {
    const topics = this.topics.map(_topic => {
      const behaviour = this.userTopics.find(topic => topic.topic_uuid === _topic.uuid) || {}
      _topic.status = behaviour.status || 0;
      return _topic
    })

    this.calculateUserActiveLevel();
    this.syncUserLevels(() => {
      this.syncUserLevelProgress();
    });
    this.topics = []
    //TODO: for update - crutch
    setTimeout(() => this.topics = topics)
  }

  setUserActiveLevel(index) {
    // convert variable because ember view not rendering
    if (!this.levels.length) return;
    index = index || 0;
    const levels = this.levels.map((item, _index) => {
      item.active = _index === index ? !item.active : false
      return Object.assign(item);
    });

    this.levels = [];
    setTimeout(() => {
      this.levels = Object.assign(levels);
      this.getTopics(levels[index || 0].uuid)
        .then(() => setTimeout(()=> this.syncUserTopicWithTopic(), 100))
    })
  }

  @action
  setActiveTopic(index) {
    //TODO: for update - crutch
    index = index || 0;
    if (index) {
      const cell = this.topics[index - 1];
      if (!cell || !cell.status) {
        this.showMessage('Спочатку пройдіть тему');
        return;
      }
    }

    const topics = this.topics.map((item, _index) => {
      item.active = _index === index ? !item.active : false
      return item
    });

    this.topics = [];

    setTimeout(() => {
      this.topics = topics;
      this.calculateUserActiveLevel();
      this.syncUserLevels();
      // Create userTopic if not exist
      const activeTopic = topics.find(topic => topic.active)
      if (!activeTopic) return;

      this.data.getWordsByTopicID(activeTopic.uuid)
        .then((list) => this.words = list)
        .catch(this.error.bind(this))
    });
  }

  calculateUserActiveLevel() {
    const topicCompletedCount = this.topics.filter(topic => topic.status).length
    let progress = (this.topics.length / 100); // percent
    progress *= topicCompletedCount; // percent
    const activeLevelIndex = this.levels.findIndex((level) => level.active)
    activeLevelIndex > 0 && (this.userLevels[activeLevelIndex].progress = Math.floor(progress));
  }

  syncUserLevelProgress() {
    for (let i = 0; i < this.userLevels.length; i++) {
      const level = this.userLevels[i];
      this.user.updateUserLevel(level.id, level);
    }
  }

  @action
  setActiveLevel(levelUUID, index) {
    if (index) {
      const cell = this.userLevels[index - 1];
      if (!cell || cell.progress < 50)
        return this.showMessage('Спочатку пройдіть рівень вище 50%', 5000);
    }

    if (this.levels.find((level) => level.active && level.uuid === levelUUID))
      return;

    return this.createUserLevel({level_uuid: levelUUID})
      .then(() => {
        this.setUserActiveLevel(index);
        this.getTopics(levelUUID).then((list) => {
          // Set topic active
          if (!this.userTopics.length) {
            this.createUserTopic(0).then(() => this.setActiveTopic(0))
            return
          }
          const userTopic = this.userTopics.find(topic => topic.level_uuid === levelUUID)
          if (!userTopic) {
            this.createUserTopic(index);
            return;
          }
          this.setActiveTopic(0);
        })
      })
  }

  getUserByID() {
    const params = this.query();
    return this.user.getUserByID(params.user_id)
      .then((user) => this.client = user)
      .catch(this.error)
  }

  getUserLevel(levels) {
    const _this = this
    return this.user.getUserLevelListByID(this.client.uuid)
      .then((list) => {
        _this.userLevels = list;
        _this.syncUserLevels();
        _this.setActiveLevel(levels[0].uuid, 0) // Set active level
      })
      .catch(this.error)
  }

  createUserTopic(index) {
    const activeLevel = this.levels.find(level => level.active)
    const activeTopic = this.topics[index || 0];

    if (!activeLevel || !activeTopic) return new Promise((r, e) => e());
    activeTopic.active = true;
    this.topics[index || 0].active = true;

    //TODO: for update - crutch
    const listTopics = this.topics
    this.topics = Object.assign(listTopics);

    // Check if userTopic exist
    if (this.userTopics.find(topic => topic.topic_uuid === activeTopic.uuid))
      return new Promise((r, e) => e());

    return this.user.createUserTopic({
      user_uuid: this.client.uuid,
      level_uuid: activeLevel.uuid,
      topic_uuid: activeTopic.uuid,
    })
      .then((object) => this.userTopics = [...this.userTopics, object])
      .catch(this.error)
  }

  getUserTopic() {
    return this.user.getUserTopicByID(this.client.uuid)
      .then((list) => this.userTopics = list)
      .catch(this.error.bind(this))
  }

  syncUserLevels(callback) {
    const levels = Object.assign(this.levels);

    (this.userLevels || []).map((item) => {
      const level = levels.find((level) => level.uuid === item.level_uuid)

      if (!level) return

      level.status = 1;
      level.progress = item.progress;
    })
    // WAS problem with update ember state (rendering view)
    this.levels = [];
    setTimeout(() => {
      this.levels = levels;
      callback && callback();
    });
  }

  createUserLevel(options) {
    options.user_uuid = this.client.uuid;
    return this.user.createUserLevel(options)
      .then((userLevel) => {
        this.userLevels = userLevel
        this.syncUserLevels()
      })
      .catch(this.error)
  }

  getLevels() {
    return this.data.getLevelList()
      .then((list) => this.levels = list)
      .catch(this.error)
  }

  getTopics(level_uuid) {
    return this.data.getTopicList(level_uuid)
      .then((list) => this.topics = list)
      .catch(this.error)
  }
};
