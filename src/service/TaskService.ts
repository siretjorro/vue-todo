import { ITodo } from '@/types/ITodo';
import { IFetchResponse } from './../types/IFetchResponse';
import Axios from 'axios';
import store from '../store';

export abstract class TaskService {
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

  static async getTasks(): Promise<IFetchResponse<ITodo[]>> {
    const url = "TodoTasks";
    return this.axios.get(url, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async getTask(id: number): Promise<IFetchResponse<ITodo>> {
    const url = "TodoTasks";
    return this.axios.get(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async createTask(task: ITodo): Promise<IFetchResponse<ITodo>> {
    const url = "TodoTasks";
    return this.axios.post(url, task, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async updateTask(task: ITodo): Promise<IFetchResponse<ITodo>> {
    const url = "TodoTasks";
    return this.axios.put(url + "/" + task.id, task, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async deleteTask(id: number): Promise<IFetchResponse<ITodo>> {
    const url = "TodoTasks";
    return this.axios.delete(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }
}
