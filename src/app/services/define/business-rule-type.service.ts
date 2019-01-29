
import { Injectable } from '@angular/core';
import {BusinessRuleType} from 'src/app/models/BusinessRuleType';
import DefineAgent from 'src/app/agents/DefineAgent';

@Injectable({
  providedIn: 'root'
})
export class BusinessRuleTypeService {

  private _defineAgent: DefineAgent;
  constructor() {
    this._defineAgent = new DefineAgent();
   }

   async getBusinessRuleTypes(): Promise<BusinessRuleType[]>  {
    return this._defineAgent.getTypes();

  }
  async getBusinessRuleType(id: number): Promise<BusinessRuleType>  {
    return this._defineAgent.getType(id);
  }

  async updateBusinessRuleType(businessRuleType: BusinessRuleType): Promise<boolean> {
    return this._defineAgent.updateType(businessRuleType);
  }

  createBusinessRuleType(businessRuleType: BusinessRuleType): Promise<boolean> {
    return this._defineAgent.createType(businessRuleType);
  }
  deleteBusinessRuleType(id: number): Promise<boolean> {
    return this._defineAgent.deleteType(id);
  }
}
