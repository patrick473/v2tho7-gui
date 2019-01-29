import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { TemplateService } from './../../../../services/define/template.service';
import { DatabasetypeService } from './../../../../services/define/databasetype.service';
import { BusinessRuleType } from 'src/app/models/BusinessRuleType';

import { Component, OnInit } from '@angular/core';
import { DatabaseType } from 'src/app/models/DatabaseType';
import { Template } from 'src/app/models/Template';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {

  id: number;
  constraintPossible: boolean;
  trigger: Template = {
    sqldialect: 0,
    businessruletype: 0,
    template: '',
    isconstraint: false,
  };
  constraint: Template = {
    sqldialect: 0,
    businessruletype: 0,
    template: '',
    isconstraint: true,
  };
  databasetype: number;
  ruletype: number;
  databasetypes: DatabaseType[] = [];
  ruletypes: BusinessRuleType[] = [];
  updateTrigger = false;
  updateConstraint = false;
  constructor(private databasetypeService: DatabasetypeService, private templateService: TemplateService, private businessruletypeService: BusinessRuleTypeService) { }

  ngOnInit() {
    this.getDatabaseTypes();
    this.getBusinessruleTypes();
  }

  onSubmit() {
    this.submitTemplates();
  }

  onSelectChange() {
    console.log(this.databasetype);
    console.log(this.ruletype);
    if (this.ruletype && this.databasetype) {
      this.getTemplates();
    }

  }

  async getDatabaseTypes() {
    this.databasetypes = await this.databasetypeService.getDatabaseTypes();
  }
  async getBusinessruleTypes() {
    this.ruletypes = await this.businessruletypeService.getBusinessRuleTypes();
  }
  async getTemplates() {
    const templates: Template[] = await this.templateService.getTemplates(this.ruletype, +this.databasetype);
    console.log(templates);
    if (templates.length > 0) {
      if (templates.find(template => template.isconstraint === true)) {
        this.constraint = templates.find(template => template.isconstraint === true);
        this.updateConstraint = true;
      } else {
        this.updateConstraint = false;
      }
      if (templates.find(template => template.isconstraint === false)) {
        this.trigger = templates.find(template => template.isconstraint === false);
        this.updateTrigger = true;
      } else {
        this.updateTrigger = false;
      }
    } else {
      this.updateConstraint = false;
      this.updateTrigger = false;
      this.trigger.template = '';
      this.constraint.template = '';
      this.trigger.sqldialect = this.databasetype;
      this.trigger.businessruletype = this.ruletype;
      this.constraint.sqldialect = this.databasetype;
      this.constraint.businessruletype = this.ruletype;
    }

  }
  async submitTemplates() {

    if (this.updateTrigger) {
      this.templateService.updateTemplate(this.trigger);
    } else {
      this.templateService.createTemplate(this.trigger);
    }
    if (this.updateConstraint) {
      this.templateService.updateTemplate(this.constraint);
    } else {
      this.templateService.createTemplate(this.constraint);
    }
  }

}
