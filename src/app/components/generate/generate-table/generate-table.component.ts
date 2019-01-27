import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.css']
})
export class GenerateTableComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    this.getBusinessrules();
  }

  getBusinessrules(): void {
  }

  onEdit(id: number): void {
    this.router.navigate([`/generate/generate-edit/details`], {queryParams: {id}} ); // route does not yet exist!
  }
  selectionChanged(event): void {
    console.log(event);
    console.log(typeof event);

  }
}
