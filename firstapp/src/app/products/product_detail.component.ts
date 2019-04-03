import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product_detail.component.html'
})


export class ProductDeatislComponent implements OnInit {
    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _ProductService: ProductService) {}

    ngOnInit(): void {
     this.id = this._route.snapshot.params['id'];
     this._ProductService.getProductDetails(this.id)
        .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}


/*
 name: String;
    image: String;
    desc: String;
this._route.queryParams
         .subscribe((data) => {
            this.name = data['name'];
            this.image = data['img'];
            this.desc = data['details'];
         });
*/