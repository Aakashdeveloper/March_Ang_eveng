import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearch } from './productSearch.pipe';
import { ProductDeatislComponent } from './product_detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        ProductDeatislComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
