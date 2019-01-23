import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import BusinessRule from 'src/app/models/rules/Businessrule';

@Injectable({
  providedIn: 'root'
})
export class DefineService {
  constructor() {}

  getRules(): void {
  }

  getRule(id: number): void {

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
