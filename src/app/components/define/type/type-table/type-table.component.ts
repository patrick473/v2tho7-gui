import {BusinessRuleType} from 'src/app/models/BusinessRuleType';
import {Router} from '@angular/router';
import {BusinessRuleTypeService} from './../../../../services/define/business-rule-type.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-type-table',
  templateUrl: './type-table.component.html',
  styleUrls: ['./type-table.component.css']
})
export class TypeTableComponent implements OnInit {

  types: BusinessRuleType[];
  constructor(private typeService: BusinessRuleTypeService, private router: Router) { }

  ngOnInit() {
    this.getTypes();
  }

  async getTypes() {
    this.types = await this.typeService.getBusinessRuleTypes();
  }
  onEdit(id: number): void {
    this.router.navigate([`/define/type/details`], {queryParams: {id}} );
  }
  onDelete(id: number): void {
    this.typeService.deleteBusinessRuleType(id);
    this.types = this.types.filter( value =>  value.id !== id);
  }
}
