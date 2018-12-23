import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import BusinessRule from 'src/app/models/rules/Businessrule';
import AttributeCompareRule from 'src/app/models/rules/types/AttributeCompareRule';


@Injectable({
  providedIn: 'root'
})
export class GenerateService {

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
}
