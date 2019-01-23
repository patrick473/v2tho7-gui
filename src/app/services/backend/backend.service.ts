import { Injectable } from '@angular/core';

import axios, {AxiosPromise} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private URI = 'https://tosad2018.herokuapp.com/';

  constructor() { }

  public postRequest(domain: string, data: object): AxiosPromise {
    return axios.post(`${this.URI}/${domain}`, data);
  }

  public getRequest(domain: string): AxiosPromise {
    return axios.get(`${this.URI}/${domain}`);
  }

  public putRequest(domain: string, data: object): AxiosPromise {
    return axios.put(`${this.URI}/${domain}`, data);
  }

  public deleteRequest(domain: string): AxiosPromise {
    return axios.delete(`${this.URI}/${domain}`);
  }
}
