import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import BusinessRule from 'src/app/models/rules/Businessrule';
import AttributeCompareRule from 'src/app/models/rules/types/AttributeCompareRule';

@Injectable({
  providedIn: 'root'
})
export class DefineService {
  constructor() {}

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
  createNewRule(ruledata: any): void {
    console.log(ruledata);
  }
  deleteRule(id: number): void {
    console.log(`employee:${id} is deleted`);
  }
  updateRule(ruleData: any, id: number): void {
    console.log(ruleData);
    console.log(`id:${id} is updated`);
  }
}
