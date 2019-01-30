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
  async getRule(id: number) {
    return await this.defineAgent.getRule(id);
  }
  async delete(id: number) {
    return await this.defineAgent.deleteRule(id);
  }
  async create(rule: BusinessRule) {
    return await this.defineAgent.createRule(rule);
  }
  async update(rule: BusinessRule) {
    return await this.defineAgent.updateRule(rule);
  }
  async apply(ruleID: number, apply: boolean) {
    return await this.defineAgent.applyRule(ruleID, apply ? 0 : 1);
  }

}
