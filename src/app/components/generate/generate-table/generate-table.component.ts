import { BusinessRuleService } from './../../../services/generate/businessrule.service';
import BusinessRule from 'src/app/models/rules/Businessrule';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.css']
})
export class GenerateTableComponent implements OnInit {

  businessrules: BusinessRule[];
  selected: BusinessRule[] = [];

  constructor(private businessruleService: BusinessRuleService, private router: Router) { }

  ngOnInit() {
    this.getBusinessrules();
  }

  getBusinessrules(): void {
    this.businessruleService.getRules()
    .subscribe(businessrules => this.businessrules = businessrules);
  }

  onDelete(id: number): void {
    this.businessruleService.deleteRule(id);
  }
  onEdit(id: number): void {
    this.router.navigate([`/generate/generate-edit/details`], {queryParams: {id}} ); // route does not yet exist!
  }

}
