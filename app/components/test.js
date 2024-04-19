import Component from "@glimmer/component";

export default class TestComponent extends Component {
  constructor() {
    super(...arguments);
    console.log('Test Component rendered');
  }
};
