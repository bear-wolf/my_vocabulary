import Component from "@glimmer/component";
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class LessonComponent extends Component {
  @service data;
  @tracked levels = [];
  @tracked topics = [];
  @tracked words = [];

  constructor() {
    super(...arguments);

    this.getLevels()
    this.getTopics()
    this.getWords()
  }

  @action
  setActiveLevel(index) {
  }

  @action
  setActiveTopic(index) {
  }

  getUsers() {
    this.data.getUserList()
      .then((users) => {
        console.log(users);
      })
      .catch((err) => console.log(err))
  }

  getLevels() {
    this.data.getLevelList()
      .then((response) => {
        this.levels = response.data.map(level => {
          level.catalog = 'open';
          level.status = null;
          return level;
        });
      })
      .catch(error => console.log('ERROR', error));
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
      .catch(error => console.log('ERROR', error));
  }

  getWords() {
    this.data.getWordList()
      .then((response) => {
        this.words = response.data;
      })
      .catch(error => console.log('ERROR', error));
  }
};
