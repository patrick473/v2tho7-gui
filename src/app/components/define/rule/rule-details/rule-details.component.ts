import { BusinessruleService } from './../../../../services/define/businessrule.service';
import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusinessRuleTypeService} from 'src/app/services/define/business-rule-type.service';
import {BusinessRuleType} from 'src/app/models/BusinessRuleType';
import {BusinessRule} from 'src/app/models/BusinessRule';


@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css'],
  providers: []
})
export class RuleDetailsComponent implements OnInit {

  form: FormGroup;

  types: BusinessRuleType[];

  constructor(private businessruleService: BusinessruleService, private businessRuleTypeService: BusinessRuleTypeService) {

  }

  async ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      constraint: new FormControl(false, Validators.required), // Set this value to something else if the detail is an update instead of new create.
      operator: new FormControl('', Validators.required),
      bindings: new FormGroup({
        0: new FormGroup({
          key: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required)
        }),
        1: new FormGroup({
          key: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required)
        }),
        2: new FormGroup({
          key: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required)
        })
      }),
      type: new FormControl('', Validators.required),
      table: new FormControl('', Validators.required),
      modifyTypes: new FormGroup({
        insert: new FormControl(false, Validators.required), // Set this value to something else if the detail is an update instead of new create.
        update: new FormControl(false, Validators.required), // Set this value to something else if the detail is an update instead of new create.
        delete: new FormControl(false, Validators.required) // Set this value to something else if the detail is an update instead of new create.
      }),
      error: new FormControl('', Validators.required)
    });
    this.types = await this.businessRuleTypeService.getBusinessRuleTypes();
  }

  async onSubmit() {
    if (this.form.valid) {
       const result = await this.businessruleService.create(<BusinessRule>this.form.value);
       console.log(result);
    } else {
      console.log(this.form.errors);
    }
  }
}
