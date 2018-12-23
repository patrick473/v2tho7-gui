import { GenerateOverviewComponent } from './components/generate/generate-overview/generate-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentDetailsComponent } from './components/target/Department/department-details/department-details.component';
import { EmployeeDetailsComponent } from './components/target/Employee/employee-details/employee-details.component';
import { ProjectOverviewComponent } from './components/target/Project/project-overview/project-overview.component';
import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';
import { ProjectDetailsComponent } from './components/target/Project/project-details/project-details.component';
import { DefineOverviewComponent } from './components/define/define-overview/define-overview.component';


const routes: Routes = [
  {path: 'target/department', component: DepartmentOverviewComponent},
  {path: 'target/department/details', component: DepartmentDetailsComponent},
  {path: 'target/project', component: ProjectOverviewComponent},
  {path: 'target/project/details', component: ProjectDetailsComponent},
  {path: 'target/employee', component: EmployeeOverviewComponent},
  {path: 'target/employee/details', component: EmployeeDetailsComponent},
  // define paths
  {path: 'define', component: DefineOverviewComponent},
  {path: 'generate', component: GenerateOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
