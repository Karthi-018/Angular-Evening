import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import {FormsModule} from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CustomDirective } from './custom.directive';
import { PipesComponent } from './pipes/pipes.component';
import { GrowthPipe } from './growth.pipe';
import { CategoryPipe } from './category.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InputoutputComponent,
    LifecycleComponent,
    DirectiveComponent,
    HomeComponent,
    EmployeelistComponent,
    CustomDirective,
    PipesComponent,
    GrowthPipe,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
