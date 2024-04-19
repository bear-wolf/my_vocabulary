import Component from "@glimmer/component";
import axios from 'axios'

export default class UserComponent extends Component {
  constructor() {
    super(...arguments);

    axios("/drafts").then((data) => {
      this.drafts = data;
    });
  }
};
