import { EmployeeService } from '../../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

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
    console.log(`edit employee ${id}`);
  }
}
