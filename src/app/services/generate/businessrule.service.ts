import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import BusinessRule from 'src/app/models/rules/Businessrule';
import AttributeCompareRule from 'src/app/models/rules/types/AttributeCompareRule';


@Injectable({
  providedIn: 'root'
})
export class BusinessRuleService {

  constructor() { }

  getRules(): Observable<BusinessRule[]> {
    const acmp = new AttributeCompareRule(
      1,
      'compares column',
      '1+1 = 2',
      'acmp_1',
      { insert: true, update: true, delete: true },
      true,
      'apples',
      'trees',
      '+',
      'pears'
    );
    const ruleList = [acmp, acmp, acmp, acmp];
    return of (ruleList);
  }

  getRule(id: number): Observable<BusinessRule> {
    return of(
      new AttributeCompareRule(
        1,
        'compares column',
        '1+1 = 2',
        'acmp_1',
        { insert: true, update: true, delete: true },
        true,
        'apples',
        'trees',
        '+',
        'pears'
      )
    );
  }

  deleteRule(id: number): void {
    console.log(`deleteRule has to be implemented in service first before you can use it!`);
  }

  generateRule(id: number): void {
    console.log(`rule: ${id} must be generated in the target database now, the code is not yet here sadly.`);
  }
}
