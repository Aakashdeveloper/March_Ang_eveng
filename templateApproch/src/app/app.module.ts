import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employeeForm/form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EmployeeFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
