import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { NotFoundComponent } from './shared/notFound.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';

// Service
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { MusicModule } from './music/musicmodule.module';

// MetaData
@NgModule({
    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule,
        MusicModule
    ],

    // All Component & pipes
    declarations: [
        AppComponent,
        BookComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent
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
