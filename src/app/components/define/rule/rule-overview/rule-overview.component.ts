import { Component, OnInit } from '@angular/core';
import BusinessRuleDao from 'src/app/models/daos/BusinessRuleDao';

@Component({
  selector: 'app-rule-overview',
  templateUrl: './rule-overview.component.html',
  styleUrls: ['./rule-overview.component.css'],
  providers: [BusinessRuleDao]
})
export class RuleOverviewComponent implements OnInit {

  constructor(private businessRuleDao: BusinessRuleDao) {
    console.log(this.businessRuleDao.getAll());
  }

  ngOnInit() {

  }

}
