import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductDeatislComponent } from './products/product_detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';


const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', component: ProductDeatislComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
