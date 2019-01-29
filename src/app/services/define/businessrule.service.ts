import { BusinessRule } from 'src/app/models/BusinessRule';
import DefineAgent from 'src/app/agents/DefineAgent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessruleService {

  constructor(private defineAgent: DefineAgent) {

  }

  async getRules() {
    return await this.defineAgent.getRules();
  }
  async delete(id: number) {
    return await this.defineAgent.deleteRule(id);
  }
  async getAll() {
    const domain = 'rule/all';
    return await this.defineAgent.getRequest(domain);
  }

  async get(id: string) {
    const domain = `rule/${id}`;
    return await this.defineAgent.getRequest(domain);
  }

  async update(updatedRule: BusinessRule) {
    const domain = `rule/${updatedRule.id}`;
    return await this.defineAgent.putRequest(domain, updatedRule);
  }

  async create(ruleToCreate: BusinessRule) {
    const domain = `rule`;
    return await this.defineAgent.postRequest(domain, ruleToCreate);
  }

}
