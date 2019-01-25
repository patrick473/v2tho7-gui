import { BusinessRuleTypeService } from './../../../../services/define/business-rule-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-overview',
  templateUrl: './type-overview.component.html',
  styleUrls: ['./type-overview.component.css']
})
export class TypeOverviewComponent implements OnInit {

  constructor(private typeService: BusinessRuleTypeService) { }

  ngOnInit() {
    this.typeService.getBusinessRuleType(102);
  }

}
