import { EmployeeService } from './../../../../services/employee.service';
import Employee from 'src/app/models/Employee';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    ssn: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    birthDate: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    city: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    country: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sex: new FormControl('', Validators.required),
    jobTitle: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    department: new FormControl('', Validators.required)
    });

submitted = false;
  onSubmit() {
    // Deep clone
    let formData: IEmployeeForm = Object.assign({}, this.employeeForm.value);
    formData = Object.assign({}, formData);
    this.employeeService.createNewEmployee(formData);
  }


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
