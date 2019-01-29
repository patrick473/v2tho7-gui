import { Template } from 'src/app/models/Template';
import { BusinessRuleType } from 'src/app/models/BusinessRuleType';

import { Injectable } from '@angular/core';

import axios, {AxiosPromise} from 'axios';
import { IResult } from './IResult';
import { BusinessRule } from '../models/BusinessRule';

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
      method: 'get',

    });
    const json: IResult = await res.json();
    return json.object as BusinessRuleType[];
  }
  public async getType(id: number) {
    const res = await fetch( `${this._baseURI}/type/${id}`, {
      method: 'get',

    });
    const json: IResult = await res.json();
    return json.object as BusinessRuleType;
  }
  public async createType(type: BusinessRuleType) {
    await fetch(`${this._baseURI}/type`, {
      method: 'post',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(type)
    });

    return true;
  }
  public async updateType(type: BusinessRuleType) {
    await fetch(`${this._baseURI}/type`, {
      method: 'put',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(type)
    });

    return true;
  }
  public async deleteType(id: number) {
    await fetch(`${this._baseURI}/type/${id}`, {
      method: 'delete',

      headers: {
        'Content-Type': 'application/json',
      }
    });

    return true;
  }
  public async getTemplate(dbtype: number, ruletype: number) {
    const res = await fetch(`${this._baseURI}/template/${ruletype}/${dbtype}`, {
      method: 'get',

    }).catch( function() {
      return {} as Response;
    } );
    const json: IResult = await res.json();
    return json.object as Template[];
  }

  public async createTemplate(template: Template) {
    await fetch(`${this._baseURI}/template`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(template)
    });
   return true;
  }
  public async updateTemplate(template: Template) {
    await fetch(`${this._baseURI}/template`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(template)
    });
   return true;
  }

  public async getRules() {
    const res = await fetch( `${this._baseURI}/rule/all`, {
      method: 'get',
    });
    const json: IResult = await res.json();
    return json.object as BusinessRule[];
  }

  public async getRule(id: number) {
    const res = await fetch( `${this._baseURI}/rule/${id}`, {
      method: 'get',
    });
    const json: IResult = await res.json();
    return json.object as BusinessRule;
  }

  public async updateRule(updatedRule: BusinessRule) {
    await fetch(`${this._baseURI}/rule`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRule)
    });
   return true;
  }
  public async createRule(rule: BusinessRule) {
    await fetch(`${this._baseURI}/rule`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rule)
    });
   return true;
  }
  }
