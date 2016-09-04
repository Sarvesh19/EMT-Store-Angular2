import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'app/product/product-details.html',
    styleUrls: ['app/product/product-details.css']
})

export class ProductDetailsComponent implements OnInit {
    product: Product;
    id: string;

    constructor(private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _location: Location) {
    }

    ngOnInit() {
        if (!this.product) {
            this._route.params.subscribe(params => {
                this.id = params['id'];
                this._productService.getProduct(this.id).subscribe(product => this.product = product);
            });
        }
    }

    goBack() {
        this._location.back();
    }

    addToWishlist() {

    }

    addToCart() {

    }
}
