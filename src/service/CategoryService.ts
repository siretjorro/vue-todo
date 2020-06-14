import { IFetchResponse } from './../types/IFetchResponse';
import Axios from 'axios';
import { ICategory } from '@/types/ICategory';
import store from '../store';

export abstract class CategoryService {
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

  static async getCategories(): Promise<IFetchResponse<ICategory[]>> {
    const url = "TodoCategories";
    return this.axios.get(url, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async getCategory(id: number): Promise<IFetchResponse<ICategory>> {
    const url = "TodoCategories";
    return this.axios.get(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async createCategory(category: ICategory): Promise<IFetchResponse<ICategory>> {
    const url = "TodoCategories";
    return this.axios.post(url, category, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async updateCategory(category: ICategory): Promise<IFetchResponse<ICategory>> {
    const url = "TodoCategories";
    return this.axios.put(url + "/" + category.id, category, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }

  static async deleteCategory(id: number): Promise<IFetchResponse<ICategory>> {
    const url = "TodoCategories";
    return this.axios.delete(url + "/" + id, {
      headers: {
        authorization: "Bearer " + store.state.token
      }
    });
  }
}
