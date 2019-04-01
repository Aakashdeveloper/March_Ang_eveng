import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    // Attribute
    // selector: '[app-prod]',
    // class
    // selector: '.app-prod',
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:red}', 'h4{color:purple}']
    styleUrls : ['./product.component.css'],
    styles: [
        `.online{
            background-color:wheat
        }`
    ]
})

export class ProductComponent implements OnInit {
    title: String = '***Product App***';
    showImage: Boolean = false;
    filterValue: String;
    imageWidth: Number = 70;
    serverstatus: String = 'offline';

    constructor(private _productService: ProductService) {
        this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    products: IProduct[];

    getColor() {
        return this.serverstatus === 'Online' ? 'green' : 'red';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: string) {
        this.title = '~~~~~Product List~~~~~>>>>>' + message;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }
}
