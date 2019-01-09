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
    const acmp1 = new AttributeCompareRule(
      1,
      'compares column',
      '1+1 = 2',
      'acmp_1',
      { insert: true, update: true, delete: true },
      'BEEP BOOP ERROR BOOP BEEP',
      true,
      'apples',
      'trees',
      '+',
      'pears'
    );
    const acmp2 = new AttributeCompareRule(
      2,
      'compares column',
      '1+1 = 2',
      'acmp_1',
      { insert: true, update: true, delete: true },
      'BEEP BOOP ERROR BOOP BEEP',
      true,
      'apples',
      'trees',
      '+',
      'pears'
    );
    const acmp3 = new AttributeCompareRule(
      3,
      'compares column',
      '1+1 = 2',
      'acmp_1',
      { insert: true, update: true, delete: true },
      'BEEP BOOP ERROR BOOP BEEP',
      true,
      'apples',
      'trees',
      '+',
      'pears'
    );
    const acmp4 = new AttributeCompareRule(
      4,
      'compares column',
      '1+1 = 2',
      'acmp_1',
      { insert: true, update: true, delete: true },
      'BEEP BOOP ERROR BOOP BEEP',
      true,
      'apples',
      'trees',
      '+',
      'pears'
    );
    const ruleList = [acmp1, acmp2, acmp3, acmp4];
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
        'BEEP BOOP ERROR BOOP BEEP',
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
