
import { EmployeeService } from '../../../../services/target/employee.service';
import Employee from 'src/app/models/Employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  submitted = false;
  employeeID: number;
  employeeForm: FormGroup;
  onSubmit() {
    // Deep clone
    let formData: IEmployeeForm = Object.assign({}, this.employeeForm.value);
    formData = Object.assign({}, formData);
    if (this.employeeID) {
      this.employeeService.updateEmployee(formData, this.employeeID);
    } else {this.employeeService.createNewEmployee(formData); }

    this.router.navigate([`/target/employee`]);
  }


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }


   ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      lastName: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      ssn: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      birthDate: new FormControl( '', Validators.required),
      address: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      city: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      country: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl( '', [Validators.required, Validators.email]),
      sex: new FormControl( '', Validators.required),
      jobTitle: new FormControl( '', [Validators.required, Validators.maxLength(255)]),
      department: new FormControl( '', Validators.required)
      });
      this.route.queryParams.subscribe(params => {
        if (params['id']) {
          this.employeeID = parseInt(params['id'], 10);
          const selectedEmployee: Employee = this.employeeService.getEmployee(this.employeeID);
          this.employeeForm.setValue({
            firstName: selectedEmployee.firstName,
            lastName: selectedEmployee.lastName,
            ssn: selectedEmployee.ssn,
            birthDate: selectedEmployee.birthDate,
            address: selectedEmployee.address,
            city: selectedEmployee.city,
            country: selectedEmployee.country,
            email: selectedEmployee.email,
            sex: selectedEmployee.sex,
            jobTitle: selectedEmployee.jobTitle,
            department: selectedEmployee.department
          }, {onlySelf: true, emitEvent: true});
        }
      });
   }


}
