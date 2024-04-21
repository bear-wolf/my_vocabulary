import Component from "@glimmer/component";
import { inject as service } from '@ember/service';

export default class LessonComponent extends Component {
  @service data;

  constructor() {
    super(...arguments);

    this.getLevels()
    this.getTopics()
    this.getWords()
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
        this.levels = response.data;
      })
      .catch(error => console.log('ERROR', error));
  }

  getTopics() {
    this.data.getTopicList()
      .then((response) => {
        this.topics = response.data;
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
