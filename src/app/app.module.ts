import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentOverviewComponent } from './components/target/Department/department-overview/department-overview.component';
import { ClarityModule, ClrFormsNextModule, ClrLayoutModule } from '@clr/angular';
import { DepartmentTableComponent } from './components/target/Department/department-table/department-table.component';
import { EmployeeOverviewComponent } from './components/target/Employee/employee-overview/employee-overview.component';
import { EmployeeTableComponent } from './components/target/Employee/employee-table/employee-table.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ProjectOverviewComponent } from './components/target/Project/project-overview/project-overview.component';
import { ProjectTableComponent } from './components/target/Project/project-table/project-table.component';
import { EmployeeDetailsComponent } from './components/target/Employee/employee-details/employee-details.component';
import { ProjectDetailsComponent } from './components/target/Project/project-details/project-details.component';
import { DepartmentDetailsComponent } from './components/target/Department/department-details/department-details.component';


import { GenerateOverviewComponent } from './components/generate/generate-overview/generate-overview.component';
import { GenerateTableComponent } from './components/generate/generate-table/generate-table.component';
import { NewOverviewComponent } from './components/define/new/new-overview/new-overview.component';
import { RuleDetailsWrapperComponent } from './components/define/details/rule-details-wrapper/rule-details-wrapper.component';
import { ArngFormComponent } from './components/define/details/type-forms/arng-form/arng-form.component';
import { AcmpFormComponent } from './components/define/details/type-forms/acmp-form/acmp-form.component';
import { AlisFormComponent } from './components/define/details/type-forms/alis-form/alis-form.component';
import { AothFormComponent } from './components/define/details/type-forms/aoth-form/aoth-form.component';
import { TcmpFormComponent } from './components/define/details/type-forms/tcmp-form/tcmp-form.component';
import { TothFormComponent } from './components/define/details/type-forms/toth-form/toth-form.component';
import { IcmpFormComponent } from './components/define/details/type-forms/icmp-form/icmp-form.component';
import { EothFormComponent } from './components/define/details/type-forms/eoth-form/eoth-form.component';
import { ModiFormComponent } from './components/define/details/type-forms/modi-form/modi-form.component';
import { BusinessRuleTypeDefineComponent } from './components/define/business-rule-type-define/business-rule-type-define.component';
import { TypeOverviewComponent } from './components/define/type/type-overview/type-overview.component';
import { TypeTableComponent } from './components/define/type/type-table/type-table.component';
import { TypeDetailsComponent } from './components/define/type/type-details/type-details.component';
import { RuleOverviewComponent } from './components/define/rule/rule-overview/rule-overview.component';

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
    DepartmentDetailsComponent,
    GenerateOverviewComponent,
    GenerateTableComponent,
    NewOverviewComponent,
    RuleDetailsWrapperComponent,
    ArngFormComponent,
    AcmpFormComponent,
    AlisFormComponent,
    AothFormComponent,
    TcmpFormComponent,
    TothFormComponent,
    IcmpFormComponent,
    EothFormComponent,
    ModiFormComponent,
    BusinessRuleTypeDefineComponent,
    TypeOverviewComponent,
    TypeTableComponent,
    TypeDetailsComponent,
    RuleOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule,
    ClrFormsNextModule,
    ClrLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
