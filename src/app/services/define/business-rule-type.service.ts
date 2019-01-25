import { Injectable } from '@angular/core';
import BusinessRuleType from 'src/app/models/rules/BusinessRuleType';
import { IBusinessRuleTypeForm } from 'src/app/components/define/business-rule-type-define/business-rule-type-define.component';

@Injectable({
  providedIn: 'root'
})
export class BusinessRuleTypeService {

  constructor() { }

  getBusinessRuleType(id: number): BusinessRuleType {
    const type: BusinessRuleType = {
        name: 'name',
        nameCode: 'nameCode',
        explanation: 'explanation',
        example: 'example',
        constraintPossible: true,
        possibleOperators: [],
        parameters: [],
        category: {name: 'name', id: 1}
      };
    return type;
  }

  updateBusinessRuleType(businessRuleTypeData: IBusinessRuleTypeForm, id: number): void {

  }

  createBusinessRuleType(businessRuleTypeData: IBusinessRuleTypeForm): void {

  }
}
