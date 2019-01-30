
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rule-overview',
  templateUrl: './rule-overview.component.html',
  styleUrls: ['./rule-overview.component.css'],
  providers: []
})
export class RuleOverviewComponent implements OnInit {

  notGenerating = true;
  constructor() {
  }

  ngOnInit() {

  }

  async generate() {
    this.notGenerating = false;
    await fetch('https://cors-anywhere.herokuapp.com/https://tosad-generate.herokuapp.com/generate/1', {
      method: 'post'
    });
    this.notGenerating = true;
  }
}
