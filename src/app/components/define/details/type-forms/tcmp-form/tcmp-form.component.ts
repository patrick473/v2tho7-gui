import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcmp-form',
  templateUrl: './tcmp-form.component.html',
  styleUrls: ['./tcmp-form.component.css']
})
export class TcmpFormComponent implements OnInit {

  tcmpForm: FormGroup;
  submitted: false;

  constructor() { }

  ngOnInit() {
    const actionsForm = new FormGroup({
      insert: new FormControl(''),
      update: new FormControl(''),
      delete: new FormControl('')
    });
    this.tcmpForm = new FormGroup({
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
      otherColumn: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }
  get name() {
    return this.tcmpForm.get('name');
  }
  get description() {
    return this.tcmpForm.get('description');
  }
  get example() {
    return this.tcmpForm.get('example');
  }
  get errorMessage() {
    return this.tcmpForm.get('errorMessage');
  }
  get column() {
    return this.tcmpForm.get('column');
  }
  get table() {
    return this.tcmpForm.get('table');
  }
  get actions() {
    return this.tcmpForm.get('actions');
  }
  get insert() {
    return this.tcmpForm.get('actions.insert');
  }
  get update() {
    return this.tcmpForm.get('actions.update');
  }
  get delete() {
    return this.tcmpForm.get('actions.delete');
  }
  get actionString() {
    let string = `${this.insert.value ? 'INS ' : ''}${this.update.value ? 'UPD ' : ''}${this.delete.value ? 'DEL ' : ''}`;
     string = string.split(' ').join(',').slice(0, -1);

    return string;
  }
  get comparisonType() {
    return this.tcmpForm.get('comparisonType');
  }
  get otherColumn() {
    return this.tcmpForm.get('otherColumn');
  }
  onSubmit() {
    console.log('beep');
    console.log(this.tcmpForm.value);
  }
}
