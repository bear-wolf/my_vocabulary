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
      .then(() => {
        this.getUserLesson()
      });
    this.getLevels()
    this.getTopics()
  }

  showMessage(message, timeout) {
    this.message = message;
    setTimeout(() => this.message = null, timeout);
  }

  error(err) {
    console.log('ERROR', err)
  }


  setUserActiveLevel(index) {
    // convert variable because ember view not rendering
    const levels = this.levels;

    levels.map(item => item.active = false);
    levels[index || 0].active = true;

    this.levels = Object.assign(levels);
  }

  @action
  getSound(word_id) {
    console.log('getSound()', word_id);
  }

  @action
  setActiveTopic(index) {
    return this.data.getWordsByTopicID(this.topics[index].uuid)
      .then((list) => {
        this.words = list
        console.log('this.words', this.words)
        //this.updateLevelsToUser()
      })
      .catch(this.error)
  }

  @action
  setActiveLevel(levelUUID, index) {
    if (this.userLevels.length <= index) {
      const cell = this.userLevels[this.userLevels.length - 1];
      if (!this.userLevels.length && index >= 1 || cell && cell.progress < 50)
        return this.showMessage('Спочатку пройдіть рівень вище 50%', 5000);
    }

    return this.createUserLevel({
      level_uuid: levelUUID
    })
      .then(() => this.setUserActiveLevel(index))
  }

  getUserByID() {
    const params = this.query();
    return this.user.getUserByID(params.user_id)
      .then((user) => {
        this.client = user
        console.log('USER', this.client);
      })
      .catch(this.error)
  }

  getUserLesson() {
    const params = this.query();
    console.log(params);
    const _this = this

    this.user.getUserLevelListByID(this.client.uuid)
      .then((list) => {
        if (!list.length) {
          this.setActiveLevel(_this.levels[0].uuid, 0)
            .then(() => this.setActiveTopic(0))
          return;
        }
        this.userLevels = list;
        _this.updateLevelsToUser();
        _this.setUserActiveLevel()
      })
      .catch(this.error)
  }

  updateLevelsToUser() {
    const levels = this.levels;
    (this.userLevels || []).map((item) => {
      const level = levels.find((level) => level.uuid === item.level_uuid)

      if (!level) return

      level.status = 1;
    })
    // WAS problem with update ember state (rendering view)
    this.levels = levels;
    console.log('levels', this.levels);
  }

  createUserLevel(options) {
    options.user_uuid = this.client.uuid;
    return this.user.createUserLevel(options)
      .then((userLevel) => {
        this.userLevels = userLevel
        this.updateLevelsToUser()
      })
      .catch(this.error)
  }

  getLevels() {
    this.data.getLevelList()
      .then((response) => {
        this.levels = response.data.map(level => {
          level.status = 0;
          return level;
        });
      })
      .catch(this.error)
  }

  getTopics() {
    this.data.getTopicList()
      .then((response) => {
        this.topics = response.data.map((topic, index) => {
          topic.status = 'completed';
          topic.active = index === 0;
          return topic;
        });
      })
      .catch(this.error)
  }
};
