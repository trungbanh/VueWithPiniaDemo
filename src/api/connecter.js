import axios from "axios";

class Connecter {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url
    })
  }

  async get(path, query) {
    return await this.instance.get(
        path
      , {
        params: query
      }).then((data) => {
        return data.data;
      })
  }

  async post(path, query, body) {
    return await this.instance.post(
        path, 
        body,
      {
        params: query
      })
  }

  async put(path, query, body) {
    return await this.instance.put(
        path,
        body,
      {
        params: query
      })
  }

  async delete(path, query) {
    return await this.instance.delete(
        path,
      {
        params: query
      })
  }
}

export default new Connecter('https://jsonplaceholder.typicode.com/');