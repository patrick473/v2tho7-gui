import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-details-wrapper',
  templateUrl: './rule-details-wrapper.component.html',
  styleUrls: ['./rule-details-wrapper.component.css']
})
export class RuleDetailsWrapperComponent implements OnInit {

  type: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
    if (params['type']) {
      this.type = params['type'];
    }
  });
  }

}
