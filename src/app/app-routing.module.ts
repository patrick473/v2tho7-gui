import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';

const routes: Routes = [
  {path: 'target/department', component: DepartmentOverviewComponent},
  {path: 'target/employee', component: EmployeeOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
