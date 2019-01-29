import { BusinessruleService } from './../../../../services/define/businessrule.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rule-overview',
  templateUrl: './rule-overview.component.html',
  styleUrls: ['./rule-overview.component.css'],
  providers: []
})
export class RuleOverviewComponent implements OnInit {

  constructor(private businessRuleDao: BusinessruleService) {
    console.log(this.businessRuleDao.getAll());
  }

  ngOnInit() {

  }

}
