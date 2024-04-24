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
        this.getLevels().then(() => {
          Promise.all([
            this.getUserTopic(),
            this.getUserLevel(),
            this.getUserTopic()
          ])
            .then(() => {
              if (!this.topics.length) return;
              if (!this.userTopics.length) {
                  this.createUserTopic(0)
                  return;
              }
              this.setActiveTopic(this.userTopics.length)
            })
            .catch(this.error.bind(this))
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
    const userTopic = this.userTopics.find(topic => topic.topic_uuid === activeTopic.uuid)
    let progress = Array.from(new Set([
        ...userTopic.progress.toString(),
      word.id.toString()
    ]))

    this.user.updateUserTopic(activeTopic.id, {
      ...activeTopic,
      level_uuid: activeTopic.level_uuid,
      topic_uuid: userTopic.topic_uuid,
      user_uuid: this.user.uuid,
      progress
    })
      .then((data) => {
        console.log('r', data)
      })
      .catch(this.error)
  }

  setUserActiveLevel(index) {
    // convert variable because ember view not rendering
    if (!this.levels.length) return;

    const levels = this.levels.map((item, _index) => {
        item.active = _index === index ? !item.active : false
        return Object.assign(item);
    });

    this.levels = [];
    setTimeout(() => {
      this.levels = Object.assign(levels);
      this.getTopics(levels[index || 0].uuid)
    })
  }

  @action
  setActiveTopic(index) {
    //TODO: for update - crutch
    const topics = this.topics.map((item, _index) => {
      item.active = _index === index ? !item.active : false
      return Object.assign(item)
    });
    this.topics = [];
    setTimeout(() => {
      this.topics = topics;
      this.data.getWordsByTopicID(this.topics[index].uuid)
        .then((list) => {
          this.words = list;
        })
        .catch(this.error)
    });
  }

  @action
  setActiveLevel(levelUUID, index) {
    if (this.userLevels.length <= index) {
      const cell = this.userLevels[this.userLevels.length - 1];
      if (!this.userLevels.length && index >= 1 || cell && cell.progress < 50)
        return this.showMessage('Спочатку пройдіть рівень вище 50%', 5000);
    }

    return this.createUserLevel({level_uuid: levelUUID})
      .then(() => this.setUserActiveLevel(index))
  }

  getUserByID() {
    const params = this.query();
    return this.user.getUserByID(params.user_id)
      .then((user) => this.client = user)
      .catch(this.error)
  }

  getUserLevel() {
    const _this = this
    return this.user.getUserLevelListByID(this.client.uuid)
      .then((list) => {
        _this.userLevels = list;
        _this.updateUserLevels();
        _this.setUserActiveLevel()
      })
      .catch(this.error)
  }

  createUserTopic(index) {
    const activeLevel = this.levels.find(level => level.active)
    const activeTopic = this.topics[index || 0];

    if (!activeLevel) return;
    activeTopic.active = true;
    this.topics[index || 0].active = true;

    //TODO: for update - crutch
    const listTopics = this.topics
    this.topics = Object.assign(listTopics);

    this.user.createUserTopic({
      user_uuid: this.client.uuid,
      level_uuid: activeLevel.uuid,
      topic_uuid: activeTopic.uuid,
    })
      .then((object) => {
        debugger
        this.userTopics = [...(this.userTopics), object]
      })
      .catch(this.error)
  }

  getUserTopic() {
    return this.user.getUserTopicByID(this.client.uuid)
      .then((list) => this.userTopics = list)
      .catch(this.error.bind(this))
  }

  updateUserLevels() {
    const levels = this.levels;

    (this.userLevels || []).map((item) => {
      const level = levels.find((level) => level.uuid === item.level_uuid)

      if (!level) return

      level.status = 1;
    })
    // WAS problem with update ember state (rendering view)
    this.levels = levels;
  }

  createUserLevel(options) {
    options.user_uuid = this.client.uuid;
    return this.user.createUserLevel(options)
      .then((userLevel) => {
        this.userLevels = userLevel
        this.updateUserLevels()
      })
      .catch(this.error)
  }

  getLevels() {
    return this.data.getLevelList()
      .then((response) => this.levels = response.data)
      .catch(this.error)
  }

  getTopics(level_uuid) {
    return this.data.getTopicList(level_uuid)
      .then((list) => {
        this.topics = list;
        // this.topics = Ember.A([])
        // response.map(item => {
        //   this.topics.push(new EmberObject(item))
        // })
      })
      .catch(this.error)
  }
};
