import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { StarComponent } from './shared/star.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDeatislComponent } from './products/product_detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';

// Pipes
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearch } from './products/productSearch.pipe';

// Service
import { ProductService } from './products/product.service';

// MetaData
@NgModule({
    // All Module
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDeatislComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
    ],

    // All Component & pipes
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        StarComponent,
        NotFoundComponent,
        ProductDeatislComponent,
        OrderComponent,
        HomeComponent
    ],

    // All Service
    providers: [
        ProductService
    ],

    // Only first Component
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
