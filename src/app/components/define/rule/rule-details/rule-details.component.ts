import { Component, OnInit } from '@angular/core';
import BusinessRuleDao from 'src/app/models/daos/BusinessRuleDao';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css'],
  providers: [BusinessRuleDao]
})
export class RuleDetailsComponent implements OnInit {

  form: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      constraint: new FormControl('', Validators.required),
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
        insert: new FormControl('', Validators.required),
        update: new FormControl('', Validators.required),
        delete: new FormControl('', Validators.required)
      }),
      error: new FormControl()
    });
  }

  onSubmit() {
    if (this.form.valid) {

    } else {
      console.log(this.form.errors);
    }
  }
}
