import { Template } from './../../models/Template';
import DefineAgent from 'src/app/agents/DefineAgent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  private _defineAgent: DefineAgent;
  constructor() {
    this._defineAgent = new DefineAgent();
   }

  async getTemplates(brtype: number, dbtype: number) {
    console.log(brtype, dbtype);
    return this._defineAgent.getTemplate(dbtype, brtype);
  }

  async updateTemplate(template: Template) {
    return this._defineAgent.updateTemplate(template);
  }

  async createTemplate(template: Template) {
    return this._defineAgent.createTemplate(template);
  }
}
