import { BusinessRule } from 'src/app/models/BusinessRule';
import { BusinessruleService } from './../../../../services/define/businessrule.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rule-table',
  templateUrl: './rule-table.component.html',
  styleUrls: ['./rule-table.component.css']
})
export class RuleTableComponent implements OnInit {

  businessrules: BusinessRule[];
  constructor(private businessruleService: BusinessruleService, private router: Router) { }

  ngOnInit() {
    this.getBusinessrules();
  }

  async getBusinessrules() {
    this.businessrules = await this.businessruleService.getRules();
  }
  onEdit(rule: BusinessRule): void {
    this.router.navigate([`/define/rule/details`], {queryParams: {id: rule.id, type: rule.type}} );
  }
  onDelete(id: number): void {
    this.businessruleService.delete(id);
    this.businessrules = this.businessrules.filter( value =>  value.id !== id);
  }
  async onApply(rule: BusinessRule) {
    await this.businessruleService.apply(rule.id, rule.applied);
    this.getBusinessrules();
  }
}
