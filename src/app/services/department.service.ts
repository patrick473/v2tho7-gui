import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import Department from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments(): Observable<Department[]> {

    const department1: Department = new Department(1, 'Industry', 'Hartford, USA');
    const department2: Department = new Department(2, 'Health', 'Mercer Island, USA');
    const department3: Department = new Department(3, 'Education', 'Bellevue, USA');

    const departmentList: Department[] = [department1, department2, department3];
    return of (departmentList);
  }
  getDepartment(id: number): Department {
    const department: Department = new Department(1, 'Industry', 'Hartford, USA');
    return department;
  }
  deleteDepartment(id: number): void {
    console.log(`department:${id} is deleted`);
  }
}
