import Component from "@glimmer/component";
import {service} from "@ember/service";
import {tracked} from "@glimmer/tracking";

export default class UserComponent extends Component {
  @service user;
  @tracked userList = [];

  constructor() {
    super(...arguments);
    this.user.getUserList().then(userList => this.userList = userList)
  }
};
