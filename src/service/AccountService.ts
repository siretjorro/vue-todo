import { ILoginDTO } from './../types/ILoginDTO';
import { IRegisterDTO } from './../types/IRegisterDTO';
import Axios from 'axios';

interface ILoginResponse {
  token: string;
  status: string;
}
export abstract class AccountService {
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

  static async login(loginDTO: ILoginDTO): Promise<string | null> {
    const url = "account/login";
    try {
      const response = await this.axios.post<ILoginResponse>(url, loginDTO);
      console.log('login response', response);
      if (response.status === 200) {
        return response.data.token;
      }
      return null;
    } catch (error) {
      console.log('error: ', (error as Error).message);
      return null;
    }
  }

  static async register(registerDTO: IRegisterDTO): Promise<string | null> {
    const url = "account/register";
    try {
      const response = await this.axios.post<ILoginResponse>(url, registerDTO);
      console.log('register response', response);
      if (response.status === 200) {
        return response.data.token;
      }
      return null;
    } catch (error) {
      console.log('error: ', (error as Error).message);
      return null;
    }
  }
}
