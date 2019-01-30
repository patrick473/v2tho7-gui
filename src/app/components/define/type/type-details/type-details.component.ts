import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BusinessRuleType } from 'src/app/models/BusinessRuleType';
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
  currentOperator: {id: number, name: string, action: string} = {id: 0, name: '', action: ''};
  formState: BusinessRuleType = {
    name: '',
    nameCode: '',
    explanation: '',
    example: '',
    constraintPossible: false,
    possibleOperators: [],
    parameters: [],
    category: {name: 'Static data constraint', id: 1}
  };
  businessRuleTypeForm: FormGroup;
  constructor(private businessRuleTypeService: BusinessRuleTypeService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {

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

  async onSubmit() {
    // Deep clone
    let formData: IFormState = Object.assign({}, this.businessRuleTypeForm.value);
    formData = Object.assign({}, formData);
    this.formState.name = formData.name;
    this.formState.nameCode = formData.nameCode;
    this.formState.example = formData.example;
    this.formState.explanation = formData.explanation;
    this.formState.constraintPossible = formData.constraintPossible ===  'true';
    if (this.id) {
      await this.businessRuleTypeService.updateBusinessRuleType(this.formState);
    } else { await this.businessRuleTypeService.createBusinessRuleType(this.formState); }

    this.router.navigate([`/define/type`]);
  }

  addParameter() {
    this.formState.parameters.push({parameter: this.currentParameter.name, datatype: this.currentParameter.datatype});
    this.currentParameter = {name: '' , datatype: ''};
    console.log(this.formState);
  }

  addOperator() {
    this.formState.possibleOperators.push(this.currentOperator);
    this.currentOperator = {id: 0, name: '' , action: ''};
    console.log(this.formState);
  }

  onOperatorDelete(name: string ) {
    this.formState.possibleOperators = this.formState.possibleOperators.filter((value) => {
      return value.name !== name;
    });
  }

  onParameterDelete(name: string ) {
    this.formState.parameters = this.formState.parameters.filter((value) => {
      return value.parameter !== name;
    });
  }


  get name() {
    return this.businessRuleTypeForm.get('name');
  }
  get explanation() {
    return this.businessRuleTypeForm.get('explanation');
  }
  get example() {
    return this.businessRuleTypeForm.get('example');
  }
  get constraintPossible() {
    return this.businessRuleTypeForm.get('constraintPossible');
  }

}
