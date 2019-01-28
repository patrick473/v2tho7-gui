import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  databasetypes: [];
  ruletypes: [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
