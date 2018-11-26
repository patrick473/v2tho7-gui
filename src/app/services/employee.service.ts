import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Employee from '../models/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {


    const employee1: Employee = new Employee(
      1,
      'Christopher',
      'Blount',
      '043-06-XXXX',
      '8-8-1980',
      '1097 Meadow View Drive',
      'Windsor',
      'United States of America',
      'ChristopherVBlount@armyspy.com',
      'M',
      'Industrial Equipment Technician',
      'Industry');
    const employee2: Employee = new Employee(
      2,
      'Earl',
      'Homan',
      '536-43-XXXX',
      '26-12-1958',
      '3885 Boone Crockett Lane',
      'Seattle',
      'United States of America',
      'EarlJHoman@dayrep.com',
      'M',
      'Health Educator',
      'Education');
    const employee3: Employee = new Employee(
      3,
      'Valerie',
      'Moore',
      '538-22-XXXX',
      '23-8-1989',
      '4397 Dale Avenue',
      'Seattle',
      'United States of America',
      'ValarieMMoore@dayrep.com',
      'F',
      'Gynecologist',
      'Health');
      const employeeList: Employee[] = [employee1, employee2, employee3, employee1, employee2, employee3, employee1, employee2, employee3, employee1, employee2, employee3];

      return of (employeeList);
  }
}
