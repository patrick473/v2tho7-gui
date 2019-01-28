import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { TemplateService } from './../../../../services/define/template.service';
import { DatabasetypeService } from './../../../../services/define/databasetype.service';
import { BusinessRuleType } from 'src/app/models/BusinessRuleType';

import { Component, OnInit } from '@angular/core';
import { DatabaseType } from 'src/app/models/DatabaseType';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {

  id: number;
  constraintPossible: boolean;
  triggerText: string;
  constraintText: string;
  databasetype: number;
  ruletype: number;
  databasetypes: DatabaseType[] = [];
  ruletypes: BusinessRuleType[] = [];
  constructor(private databasetypeService: DatabasetypeService, private templateService: TemplateService, private businessruletypeService: BusinessRuleTypeService) { }

  ngOnInit() {
    this.getDatabaseTypes();
    this.getBusinessruleTypes();
  }

  onSubmit() {

  }

  onSelectChange() {
    console.log(this.databasetype);
    console.log(this.ruletype);
  }

  async getDatabaseTypes() {
    this.databasetypes = await this.databasetypeService.getDatabaseTypes();
  }
  async getBusinessruleTypes() {
    this.ruletypes = await this.businessruletypeService.getBusinessRuleTypes();
  }

}
