import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';

// MetaData
@NgModule({
    // All Module
    imports: [
        BrowserModule
    ],

    // All Component & pipes
    declarations: [
        AppComponent,
        BookComponent
    ],

    // All Service
    providers: [],

    // Only first Component
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
