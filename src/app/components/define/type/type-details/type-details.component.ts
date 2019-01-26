import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BusinessRuleType } from 'src/app/models/rules/BusinessRuleType';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface IFormState {
  name: string;
  nameCode: string;
  explanation: string;
  example: string;
  constraintPossible: string;
  category: string;
}

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})

export class TypeDetailsComponent implements OnInit {
  submitted = false;
  id: number;
  options: string;
  currentParameter: {name: string, datatype: string} = {name: '', datatype: ''};
  currentOperator: {name: string, action: string} = {name: '', action: ''};
  businessRuleType: BusinessRuleType;
  formState: BusinessRuleType = {
    name: '',
    nameCode: '',
    explanation: '',
    example: '',
    constraintPossible: false,
    possibleOperators: [],
    parameters: [],
    category: {name: '', id: 0}
  };
  businessRuleTypeForm: FormGroup;
  constructor(private businessRuleTypeService: BusinessRuleTypeService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      if (params['id']) {
        this.id = parseInt(params['id'], 10);
        this.businessRuleType = await this.businessRuleTypeService.getBusinessRuleType(this.id);
      }
    });

    this.businessRuleTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    nameCode: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]),
    explanation: new FormControl('', [Validators.required, Validators.maxLength(255) ]),
    example: new FormControl('', [Validators.required, Validators.maxLength(255) ]),
    constraintPossible: new FormControl('', [Validators.required ]),
    category: new FormControl('', [Validators.required ]),
  });

  this.route.queryParams.subscribe(async (params) => {
    if (params['id']) {
      this.id = parseInt(params['id'], 10);
      this.formState = await this.businessRuleTypeService.getBusinessRuleType(this.id);
      this.businessRuleTypeForm.setValue({
        name: this.formState.name,
        nameCode: this.formState.nameCode,
        explanation: this.formState.explanation,
        example: this.formState.example,
        constraintPossible: this.formState.constraintPossible,
        category: this.formState.category
      }, {onlySelf: true, emitEvent: true});
    }
  });
  }

  onSubmit() {
    // Deep clone
    let formData: IFormState = Object.assign({}, this.businessRuleTypeForm.value);
    formData = Object.assign({}, formData);
    if (this.id) {
      this.businessRuleTypeService.updateBusinessRuleType(this.formState);
    } else {this.businessRuleTypeService.createBusinessRuleType(this.formState); }

    this.router.navigate([`/target/employee`]);
  }

  addParameter() {
    this.formState.parameters.push(this.currentParameter);
    this.currentParameter = {name: '' , datatype: ''};
    console.log(this.formState);
  }

  addOperator() {
    this.formState.possibleOperators.push(this.currentOperator);
    this.currentOperator = {name: '' , action: ''};
    console.log(this.formState);
  }

}
