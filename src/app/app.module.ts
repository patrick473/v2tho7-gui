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
import { EmployeeNewComponent } from './components/target/Employee/employee-new/employee-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DepartmentOverviewComponent,
    DepartmentTableComponent,
    EmployeeOverviewComponent,
    EmployeeTableComponent,
    EmployeeNewComponent
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
