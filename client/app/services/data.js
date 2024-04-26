import Service from '@ember/service';
import axios from "axios";
import {action} from "@ember/object";
import ENV from "client/config/environment";

export default class Data extends Service {

  @action
  async getLevelList() {
    return await axios.get(`${ENV.API_URL}/level/list`).then(response => response.data)
  }

  @action
  async getLevelByID(ID) {
    return await axios.post(`${ENV.API_URL}/level/${ID}`)
  }

  @action
  async getTopicList(level_uuid) {
    return await axios.get(`${ENV.API_URL}/topic/list?level_uuid=${level_uuid}`).then(response => response.data)
  }

  @action
  async getWordsByTopicID(uuid) {
    return await axios.get(`${ENV.API_URL}/word?topic_uuid=${uuid}`).then(response => response.data)
  }
}
