import Department from 'src/app/models/Department';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../../../services/target/department.service';
import { Component, OnInit } from '@angular/core';



export interface IDepartmentForm {
  name: string;
  location: string;
}


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  submitted = false;
  departmentID: number;
  departmentForm: FormGroup;


  constructor(private departmentService: DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.departmentID = parseInt(params['id'], 10);
        const selectedDepartment: Department = this.departmentService.getDepartment(this.departmentID);
        this.departmentForm.setValue({
          name: selectedDepartment.name,
          location: selectedDepartment.location
        }, {onlySelf: true, emitEvent: true});
      }
    });
  }

  onSubmit() {

    let formData: IDepartmentForm = Object.assign({}, this.departmentForm.value);
    formData = Object.assign({}, formData);
    if (this.departmentID) {
      this.departmentService.updateDepartment(formData, this.departmentID);
    } else {this.departmentService.createNewDepartment(formData); }

    this.router.navigate([`/target/department`]);
  }

}
