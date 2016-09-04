import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: 'app/product/product-details.html',
    styleUrls: ['app/product/product-details.css']
})

export class ProductDetailsComponent implements OnInit {
    product: Product;
    id: string;

    constructor(private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router) {
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
        this._router.navigate(['category', this.product.productCategory]);
    }

    addToWishlist() {

    }

    addToCart() {

    }
}
