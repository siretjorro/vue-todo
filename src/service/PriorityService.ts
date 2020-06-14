import { IPriority } from './../types/IPriority';
import { IFetchResponse } from './../types/IFetchResponse';
import Axios from 'axios';
import store from '../store';

export abstract class PriorityService {
  private static axios = Axios.create(
    {
      baseURL: "https://taltech.akaver.com/api/",
      headers: {
        common: {
          'Content-Type': 'application/json'
        }
      }
    }
  )

  static async getPriorities(): Promise<IFetchResponse<IPriority[]>> {
    const url = "TodoPriorities";
    return this.axios.get(url, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async getPriority(id: number): Promise<IFetchResponse<IPriority>> {
    const url = "TodoPriorities";
    return this.axios.get(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async createPriority(priority: IPriority): Promise<IFetchResponse<IPriority>> {
    const url = "TodoPriorities";
    return this.axios.post(url, priority, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async updatePriority(priority: IPriority): Promise<IFetchResponse<IPriority>> {
    const url = "TodoPriorities";
    return this.axios.put(url + "/" + priority.id, priority, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async deletePriority(id: number): Promise<IFetchResponse<IPriority>> {
    const url = "TodoPriorities";
    return this.axios.delete(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }
}
