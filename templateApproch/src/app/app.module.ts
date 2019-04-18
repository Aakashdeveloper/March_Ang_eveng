import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employeeForm/form.component';
import { FormPosterService } from './service/formPoster.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        EmployeeFormComponent
    ],
    providers: [
        FormPosterService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
