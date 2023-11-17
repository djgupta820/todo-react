import axios from "axios";
import { USER_API_SERVER } from "../Constants";

export default class UserAPI {
  static loginUser(username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${USER_API_SERVER}/${username}`);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static registerUser(username, password){
    return new Promise(async (resolve, reject) => {
        const user = {
            id: username,
            password: password
        }
        try {
            const response = await axios.post(USER_API_SERVER, user);
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
    })
  }
}
