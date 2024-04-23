import {tracked} from "@glimmer/tracking";

class Entry {
  @tracked name;
  @tracked phoneNumber;

  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
