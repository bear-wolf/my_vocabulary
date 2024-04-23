import Service from '@ember/service';
import axios from "axios";
import {action} from "@ember/object";
import ENV from "client/config/environment";

export default class User extends Service {

  @action
  async getUserByID(ID) {
    return await axios.get(`${ENV.API_URL}/user/${ID}`)
                      .then((response) => response.data)
  }

  @action
  async getUserList() {
    return await axios.get(`${ENV.API_URL}/user/list`)
                      .then((response) => response.data)
  }

  @action
  async getUserLevelListByID(UUID) {
    return await axios.get(`${ENV.API_URL}/user-level/list?uuid=${UUID}`)
                      .then((response) => response.data)
  }

  @action
  async createUserLevel(data) {
    return await axios.post(`${ENV.API_URL}/user-level`, data)
                      .then((response) => response.data)
  }

  @action
  async getUserTopicByID(ID) {
    return await axios.get(`${ENV.API_URL}/user-topic/${ID}`)
  }

  @action
  async createUserTopic(data) {
    return await axios.post(`${ENV.API_URL}/user-topic/`, data)
                      .then((response) => response.data)
  }

  @action
  async getUserWordByID(ID) {
    return await axios.get(`${ENV.API_URL}/user-word/${ID}`)
  }

  @action
  async createUserWord(data) {
    return await axios.post(`${ENV.API_URL}/user-word/`, data)
                      .then((response) => response.data)
  }
}
