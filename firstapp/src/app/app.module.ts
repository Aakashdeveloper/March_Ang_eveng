import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';

// Pipes
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearch } from './products/productSearch.pipe';

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
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch
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
