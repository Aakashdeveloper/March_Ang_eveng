import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';

// MetaData
@NgModule({
    // All Module
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Component & pipes
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
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
