import { DepartmentService } from './../../../../services/department.service';
import { Component, OnInit } from '@angular/core';
import Department from 'src/app/models/Department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }
  onDelete(id: number): void {
    this.departmentService.deleteDepartment(id);
  }
  onEdit(id: number): void {
    this.router.navigate([`/target/department/edit/${id}`]);
  }

}
