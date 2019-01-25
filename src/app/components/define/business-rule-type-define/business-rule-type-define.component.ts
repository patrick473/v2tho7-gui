import BusinessRuleType from 'src/app/models/rules/BusinessRuleType';
import { BusinessRuleTypeService } from './../../../services/define/business-rule-type.service';
import { BusinessRuleService } from './../../../services/generate/businessrule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface IBusinessRuleTypeForm {
  id?: number;
  name: string;
  nameCode: string;
  explanation: string;
  example: string;
  constraintPossible: boolean;
  possibleOperators: string;
  parameters: string;
  category: {name: string, id: number};
}

@Component({
  selector: 'app-business-rule-type-define',
  templateUrl: './business-rule-type-define.component.html',
  styleUrls: ['./business-rule-type-define.component.css']
})
export class BusinessRuleTypeDefineComponent implements OnInit {
  businessRuleTypeForm: FormGroup;
  id: number;
  constructor(private businessRuleTypeService: BusinessRuleTypeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.businessRuleTypeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.id = parseInt(params['id'], 10);
        const selectedBusinessRuleType: BusinessRuleType = this.businessRuleTypeService.getBusinessRuleType(this.id);
        this.businessRuleTypeForm.setValue({
          id: selectedBusinessRuleType.id,
          name: selectedBusinessRuleType.name,
          nameCode: selectedBusinessRuleType.nameCode,
          explanation: selectedBusinessRuleType.explanation,
          example: selectedBusinessRuleType.example,
          constraintPossible: selectedBusinessRuleType.constraintPossible,
          possibleOperators: selectedBusinessRuleType.possibleOperators,
          parameters: selectedBusinessRuleType.parameters,
          category: selectedBusinessRuleType.category
        }, {onlySelf: true, emitEvent: true});
      }
    });
  }

  onSubmit() {

    let formData: IBusinessRuleTypeForm = Object.assign({}, this.businessRuleTypeForm.value);
    formData = Object.assign({}, formData);
    if (this.id) {
      this.businessRuleTypeService.updateBusinessRuleType(formData, this.id);
    } else {this.businessRuleTypeService.createBusinessRuleType(formData); }

    this.router.navigate([`/target/department`]);
  }

}
