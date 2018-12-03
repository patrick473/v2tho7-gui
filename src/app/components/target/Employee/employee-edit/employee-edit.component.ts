import { EmployeeService } from './../../../../services/employee.service';
import Employee from 'src/app/models/Employee';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


export interface IEmployeeForm {
  firstName: string;
  lastName: string;
  ssn: string;
  birthDate: string;
  address: string;
  city: string;
  country: string;
  email: string;
  sex: string;
  jobTitle: string;
  department: string;
}

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  firstName = 'beep';

  employeeForm: FormGroup;

  submitted = false;

  employeeID: number;
  onSubmit() {
    // Deep clone
    let formData: IEmployeeForm = Object.assign({}, this.employeeForm.value);
    formData = Object.assign({}, formData);
    this.employeeService.updateEmployee(formData, this.employeeID);
  }


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

   ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeID = parseInt(params['id'], 10);
      const selectedEmployee: Employee = this.employeeService.getEmployee(this.employeeID);

      this.employeeForm = new FormGroup({
        firstName: new FormControl(selectedEmployee.firstName, [Validators.required, Validators.maxLength(255)]),
        lastName: new FormControl(selectedEmployee.lastName, [Validators.required, Validators.maxLength(255)]),
        ssn: new FormControl(selectedEmployee.ssn, [Validators.required, Validators.maxLength(255)]),
        birthDate: new FormControl(selectedEmployee.birthDate, Validators.required),
        address: new FormControl(selectedEmployee.address, [Validators.required, Validators.maxLength(255)]),
        city: new FormControl(selectedEmployee.city, [Validators.required, Validators.maxLength(255)]),
        country: new FormControl(selectedEmployee.country, [Validators.required, Validators.maxLength(255)]),
        email: new FormControl(selectedEmployee.email, [Validators.required, Validators.email]),
        sex: new FormControl(selectedEmployee.sex, Validators.required),
        jobTitle: new FormControl(selectedEmployee.jobTitle, [Validators.required, Validators.maxLength(255)]),
        department: new FormControl(selectedEmployee.department, Validators.required)
        });
    });
  }

}
