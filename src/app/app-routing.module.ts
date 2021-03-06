import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentDetailsComponent } from './components/target/Department/department-details/department-details.component';
import { EmployeeDetailsComponent } from './components/target/Employee/employee-details/employee-details.component';
import { ProjectOverviewComponent } from './components/target/Project/project-overview/project-overview.component';
import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';
import { ProjectDetailsComponent } from './components/target/Project/project-details/project-details.component';
import { TypeOverviewComponent } from './components/define/type/type-overview/type-overview.component';
import { RuleOverviewComponent } from './components/define/rule/rule-overview/rule-overview.component';
import { TypeDetailsComponent } from './components/define/type/type-details/type-details.component';

import { RuleDetailsComponent } from './components/define/rule/rule-details/rule-details.component';
import {HomeComponent} from 'src/app/components/home/home.component';
import { TemplateDetailsComponent } from './components/define/template/template-details/template-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'target/department', component: DepartmentOverviewComponent},
  {path: 'target/department/details', component: DepartmentDetailsComponent},
  {path: 'target/project', component: ProjectOverviewComponent},
  {path: 'target/project/details', component: ProjectDetailsComponent},
  {path: 'target/employee', component: EmployeeOverviewComponent},
  {path: 'target/employee/details', component: EmployeeDetailsComponent},
  {path: 'define/rule', component: RuleOverviewComponent},
  {path: 'define/rule/details', component: RuleDetailsComponent},
  {path: 'define/type', component: TypeOverviewComponent},
  {path: 'define/type/details', component: TypeDetailsComponent},
  {path: 'define/template/details', component: TemplateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
