import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acmp-form',
  templateUrl: './acmp-form.component.html',
  styleUrls: ['./acmp-form.component.css']
})
export class AcmpFormComponent implements OnInit {

  acmpForm: FormGroup;
  submitted: false;

  constructor() { }

  ngOnInit() {
    const actionsForm = new FormGroup({
      insert: new FormControl(''),
      update: new FormControl(''),
      delete: new FormControl('')
    });
    this.acmpForm = new FormGroup({
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
      actions: actionsForm,
      comparisonType: new FormControl('', Validators.required),
      value: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }
  get name() {
    return this.acmpForm.get('name');
  }
  get description() {
    return this.acmpForm.get('description');
  }
  get example() {
    return this.acmpForm.get('example');
  }
  get errorMessage() {
    return this.acmpForm.get('errorMessage');
  }
  get column() {
    return this.acmpForm.get('column');
  }
  get table() {
    return this.acmpForm.get('table');
  }
  get actions() {
    return this.acmpForm.get('actions');
  }
  get insert() {
    return this.acmpForm.get('actions.insert');
  }
  get update() {
    return this.acmpForm.get('actions.update');
  }
  get delete() {
    return this.acmpForm.get('actions.delete');
  }
  get actionString() {
    let string = `${this.insert.value ? 'INS ' : ''}${this.update.value ? 'UPD ' : ''}${this.delete.value ? 'DEL ' : ''}`;
     string = string.split(' ').join(',').slice(0, -1);

    return string;
  }
  get comparisonType() {
    return this.acmpForm.get('comparisonType');
  }
  get value() {
    return this.acmpForm.get('value');
  }
  onSubmit() {
    console.log('beep');
    console.log(this.acmpForm.value);
  }
}
