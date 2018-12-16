import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { DepartmentTableComponent } from './components/target/Department/department-table/department-table.component';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';
import { EmployeeTableComponent } from './components/target/Employee/employee-table/employee-table.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ProjectOverviewComponent } from './components/target/Project/project-overview/project-overview.component';
import { ProjectTableComponent } from './components/target/Project/project-table/project-table.component';
import { EmployeeDetailsComponent } from './components/target/Employee/employee-details/employee-details.component';
import { ProjectDetailsComponent } from './components/target/Project/project-details/project-details.component';
import { DepartmentDetailsComponent } from './components/target/Department/department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DepartmentOverviewComponent,
    DepartmentTableComponent,
    EmployeeOverviewComponent,
    EmployeeTableComponent,
    EmployeeDetailsComponent,
    ProjectOverviewComponent,
    ProjectTableComponent,
    ProjectDetailsComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule,
    ClrFormsNextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
