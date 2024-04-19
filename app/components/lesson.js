import Component from "@glimmer/component";
import axios from 'axios'

export default class LessonComponent extends Component {
  constructor() {
    super(...arguments);

    this.getLevels()
    this.getTopics()
    this.getWords()
  }

  getLevels() {
    // console.log(process.env.API_URL);
    //console.log(config);

    axios(`http://localhost:4000/v1/level/list`)
      .then((response) => {
        this.levels = response.data;
        console.log(this.levels);
      })
      .catch(error => console.log('ERROR', error));
  }

  getTopics() {
    axios(`http://localhost:4000/v1/topic/list`)
      .then((response) => {
        this.topics = response.data;
        console.log(this.topics);
      })
      .catch(error => console.log('ERROR', error));
  }

  getWords() {
    axios(`http://localhost:4000/v1/word/list`)
      .then((response) => {
        this.words = response.data;
        console.log(this.words);
      })
      .catch(error => console.log('ERROR', error));
  }
};
