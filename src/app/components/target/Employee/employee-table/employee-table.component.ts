import { EmployeeService } from '../../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }
  onDelete(id: number): void {
    this.employeeService.deleteEmployee(id);
  }
  onEdit(id: number): void {
    this.router.navigate([`/target/employee/details`], {queryParams: {id}});
  }
}
