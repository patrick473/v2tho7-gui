import { BusinessRuleType } from 'src/app/models/BusinessRuleType';

import { Injectable } from '@angular/core';

import axios, {AxiosPromise} from 'axios';
import { IResult } from './IResult';

@Injectable({
  providedIn: 'root'
})
export default class DefineAgent {

  private _baseURI = 'https://cors-anywhere.herokuapp.com/https://tosad2018.herokuapp.com/';

  constructor() { }

  public postRequest(domain: string, data: object): AxiosPromise {
    return axios.post(`${this._baseURI}${domain}`, data);
  }

  public getRequest(domain: string): AxiosPromise {
    return axios.get(`${this._baseURI}${domain}`);
  }

  public putRequest(domain: string, data: object): AxiosPromise {
    return axios.put(`${this._baseURI}${domain}`, data);
  }

  public deleteRequest(domain: string): AxiosPromise {
    return axios.delete(`${this._baseURI}${domain}`);
  }

  public async getTypes() {
    const res = await fetch( `${this._baseURI}/type/all`, {
      method: 'get'
    });
    const json: IResult = await res.json();
    return json.object as BusinessRuleType[];
  }
  public async getType(id: number) {
    const res = await fetch( `${this._baseURI}/type/${id}`, {
      method: 'get'
    });
    const json: IResult = await res.json();
    return json.object as BusinessRuleType;
  }
  public async createType(type: BusinessRuleType) {
    await fetch(`${this._baseURI}/type`, {
      method: 'post',
      body: JSON.stringify(type)
    });

    return true;
  }
  public async updateType(type: BusinessRuleType) {
    await fetch(`${this._baseURI}/type`, {
      method: 'put',
      body: JSON.stringify(type)
    });

    return true;
  }
  public async deleteType(id: number) {
    await fetch(`${this._baseURI}/type/${id}`, {
      method: 'delete'
    });

    return true;
  }
  }
