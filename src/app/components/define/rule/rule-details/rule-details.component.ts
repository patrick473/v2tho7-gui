import { BusinessruleService } from './../../../../services/define/businessrule.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BusinessRuleTypeService } from 'src/app/services/define/business-rule-type.service';
import { BusinessRuleType } from 'src/app/models/BusinessRuleType';
import { BusinessRule } from 'src/app/models/BusinessRule';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css'],
  providers: []
})
export class RuleDetailsComponent implements OnInit {
  id: number;
  form: FormGroup;
  formHidden = true;
  ruletype: BusinessRuleType;
  ruletypeID: number;
  isUpdate: boolean;
  ruletypes: BusinessRuleType[] = [];
  operators: { id: number; name: string; action: string }[] = [];

  bindingLabels = [];
  constructor(
    private businessruleService: BusinessruleService,
    private businessRuleTypeService: BusinessRuleTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      constraint: new FormControl(false, Validators.required),
      operator: new FormControl('', Validators.required),
      table: new FormControl('', Validators.required),
      insert: new FormControl(false, Validators.required),
      update: new FormControl(false, Validators.required),
      delete: new FormControl(false, Validators.required),
      error: new FormControl('', Validators.required),
      bindings: new FormArray([])
    });
    await this.getBusinessruleTypes();
    this.route.queryParams.subscribe(async (params) => {
      if (params['id'] && params['type']) {
        this.id = +params['id'];
        this.ruletypeID = +params['type'];
        this.isUpdate = true;
        const tobeUpdatedRule =  await this.businessruleService.getRule(this.id);
        this.form.setValue({
          name: tobeUpdatedRule.name,
          constraint: false,
          operator: tobeUpdatedRule.operator,
          table: tobeUpdatedRule.table,
          insert: tobeUpdatedRule.insert,
          update: tobeUpdatedRule.update,
          delete: tobeUpdatedRule.delete,
          error: tobeUpdatedRule.error,
          bindings: []
        }, {onlySelf: true, emitEvent: true});
        this.assignRuleType(this.ruletypeID, tobeUpdatedRule.bindings);
      }
    });
    }

  async onSubmit() {
    const bindings: { key: string; value: string }[] = [];
    const bindingvalues: string[] = this.bindings.value as string[];
    bindingvalues.forEach((value, index) =>
      bindings.push({ key: this.bindingLabels[index], value })
    );

    if (this.isUpdate) {
      const createdRule: BusinessRule = {
        id: this.id,
        name: this.name.value,
        constraint: this.constraint.value,
        operator: this.operator.value,
        table: this.table.value,
        insert: this.insert.value,
        update: this.update.value,
        delete: this.delete.value,
        error: this.error.value,
        bindings,
        applied: false,
        type: this.ruletype.id
      };
      await this.businessruleService.update(createdRule);
      this.router.navigate([`/define/rule`]);
    } else {
      const createdRule: BusinessRule = {
        name: this.name.value,
        constraint: this.constraint.value === 'true',
        operator: this.operator.value,
        table: this.table.value,
        insert: this.insert.value === 'true',
        update: this.update.value === 'true',
        delete: this.delete.value === 'true',
        error: this.error.value,
        bindings,
        applied: false,
        type: this.ruletype.id
      };
      await this.businessruleService.create(createdRule);
      this.router.navigate([`/define/rule`]);
    }
    console.log(this.bindings.value);
  }

  get name() {
    return this.form.get('name');
  }
  get constraint() {
    return this.form.get('constraint');
  }
  get operator() {
    return this.form.get('operator');
  }
  get type() {
    return this.form.get('type');
  }
  get table() {
    return this.form.get('table');
  }
  get insert() {
    return this.form.get('insert');
  }
  get update() {
    return this.form.get('update');
  }
  get delete() {
    return this.form.get('delete');
  }
  get error() {
    return this.form.get('error');
  }
  get bindings() {
    return this.form.get('bindings') as FormArray;
  }

  async getBusinessruleTypes() {
    this.ruletypes = await this.businessRuleTypeService.getBusinessRuleTypes();
  }
  async onSelectChange() {
    console.log(this.ruletypeID);
    await this.assignRuleType(this.ruletypeID);
  }

  async assignRuleType(id: number, bindings ?: { key: string; value: string }[]) {
    this.ruletype = await this.businessRuleTypeService.getBusinessRuleType(id);
    this.operators = this.ruletype.possibleOperators;
    this.bindingLabels = [];
    while (this.bindings.length !== 0) {
      this.bindings.removeAt(0);
    }
    this.ruletype.parameters.forEach((value, i) => {
      this.bindingLabels.push(value.parameter);
      if (bindings) {
        this.bindings.push(new FormControl(bindings[i].value));
      } else {
        this.bindings.push(new FormControl(''));
      }
    });
    this.formHidden = false;
    console.log(this.bindingLabels);
  }
}
