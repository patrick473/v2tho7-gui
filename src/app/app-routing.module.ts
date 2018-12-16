import { DepartmentDetailsComponent } from './components/target/Department/department-details/department-details.component';
import { EmployeeDetailsComponent } from './components/target/Employee/employee-details/employee-details.component';
import { ProjectOverviewComponent } from './components/target/Project/project-overview/project-overview.component';
import { EmployeeNewComponent } from './components/target/Employee/employee-new/employee-new.component';
import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';
import { ProjectDetailsComponent } from './components/target/Project/project-details/project-details.component';


const routes: Routes = [
  {path: 'target/department', component: DepartmentOverviewComponent},
  {path: 'target/department/details', component: DepartmentDetailsComponent},
  {path: 'target/project', component: ProjectOverviewComponent},
  {path: 'target/project/details', component: ProjectDetailsComponent},
  {path: 'target/employee', component: EmployeeOverviewComponent},
  {path: 'target/employee/details', component: EmployeeDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
