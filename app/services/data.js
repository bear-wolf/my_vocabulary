import Service from '@ember/service';
import axios from "axios";
import {action} from "@ember/object";
import ENV from "client/config/environment";

export default class Data extends Service {

  @action
  async getUserList() {
    return await axios.get(`${ENV.API_URL}/user/list`)
  }

  @action
  async getUserByID(ID) {
    return await axios.post(`${ENV.API_URL}/user/${ID}`)
  }

  @action
  async getLevelList() {
    return await axios.get(`${ENV.API_URL}/level/list`)
  }

  @action
  async getLevelByID(ID) {
    return await axios.post(`${ENV.API_URL}/level/${ID}`)
  }

  @action
  async getTopicList() {
    return await axios.get(`${ENV.API_URL}/topic/list`)
  }

  @action
  async getWordList() {
    return await axios.get(`${ENV.API_URL}/word/list`)
  }
}
