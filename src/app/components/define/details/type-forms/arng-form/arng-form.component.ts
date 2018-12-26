import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validateRange } from 'src/app/helpers/Validations.helper';

@Component({
  selector: 'app-arng-form',
  templateUrl: './arng-form.component.html',
  styleUrls: ['./arng-form.component.css']
})


export class ArngFormComponent implements OnInit {

  arngForm: FormGroup;
  submitted: false;

  constructor() { }

  ngOnInit() {
    const rangeForm = new FormGroup({
      rangeStart: new FormControl(0, [Validators.required]),
      rangeEnd: new FormControl(0, [Validators.required])
    },
    {
      validators: validateRange.bind(this)
    });

    this.arngForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      example: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      column: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      table: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      range: rangeForm,
      inRange: new FormControl('', Validators.required)
    });
  }

  get name() {return this.arngForm.get('name'); }
  get description() {return this.arngForm.get('description'); }
  get example() {return this.arngForm.get('example'); }
  get column() {return this.arngForm.get('column'); }
  get table() {return this.arngForm.get('table'); }
  get range() {return this.arngForm.get('range'); }
  get rangeStart() {return this.arngForm.get('range.rangeStart'); }
  get rangeEnd() {return this.arngForm.get('range.rangeEnd'); }

  onSubmit() {
    console.log('beep');
  }



}
