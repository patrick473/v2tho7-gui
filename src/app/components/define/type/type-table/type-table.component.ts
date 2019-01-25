import { BusinessRuleType } from 'src/app/models/rules/BusinessRuleType';
import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-table',
  templateUrl: './type-table.component.html',
  styleUrls: ['./type-table.component.css']
})
export class TypeTableComponent implements OnInit {

  types: BusinessRuleType[];
  constructor(private typeService: BusinessRuleTypeService) { }

  ngOnInit() {
    this.getTypes();
    console.log(this.types);
  }

  async getTypes() {
    this.types = await this.typeService.getBusinessRuleTypes();
  }
}
