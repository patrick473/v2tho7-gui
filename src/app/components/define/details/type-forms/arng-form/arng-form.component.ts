import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { validateRange } from 'src/app/helpers/Validations.helper';
import { stringify } from 'querystring';

@Component({
  selector: 'app-arng-form',
  templateUrl: './arng-form.component.html',
  styleUrls: ['./arng-form.component.css']
})
export class ArngFormComponent implements OnInit {
  arngForm: FormGroup;
  submitted: false;

  constructor() {}


  ngOnInit() {
    const rangeForm = new FormGroup(
      {
        rangeStart: new FormControl(0, [Validators.required]),
        rangeEnd: new FormControl(0, [Validators.required])
      },
      {
        validators: validateRange.bind(this)
      }
    );
    const actionsForm = new FormGroup({
      insert: new FormControl(''),
      update: new FormControl(''),
      delete: new FormControl('')
    });

    this.arngForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      example: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      errorMessage: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      column: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      table: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      range: rangeForm,
      inRange: new FormControl('', Validators.required),
      actions: actionsForm
    });
  }

  get name() {
    return this.arngForm.get('name');
  }
  get description() {
    return this.arngForm.get('description');
  }
  get example() {
    return this.arngForm.get('example');
  }
  get errorMessage() {
    return this.arngForm.get('errorMessage');
  }
  get column() {
    return this.arngForm.get('column');
  }
  get table() {
    return this.arngForm.get('table');
  }
  get range() {
    return this.arngForm.get('range');
  }
  get rangeStart() {
    return this.arngForm.get('range.rangeStart');
  }
  get rangeEnd() {
    return this.arngForm.get('range.rangeEnd');
  }
  get actions() {
    return this.arngForm.get('actions');
  }
  get insert() {
    return this.arngForm.get('actions.insert');
  }
  get update() {
    return this.arngForm.get('actions.update');
  }
  get delete() {
    return this.arngForm.get('actions.delete');
  }
  get actionString() {
    let string = `${this.insert.value ? 'INS ' : ''}${this.update.value ? 'UPD ' : ''}${this.delete.value ? 'DEL ' : ''}`;
     string = string.split(' ').join(',').slice(0, -1);

    return string;
  }
  onSubmit() {
    console.log('beep');
    console.log(this.arngForm.value);
  }
}
