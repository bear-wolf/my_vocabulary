import Service from '@ember/service';
import axios from "axios";
import 'dotenv/config'

export default class UserService extends Service {

  async getList() {
    return await axios.get(`${process.env.API_URL}/user/list`, {});;
  }

  async getByID(ID) {
    return await axios.post(`${process.env.API_URL}/user/${ID}`, {});;
  }
}
