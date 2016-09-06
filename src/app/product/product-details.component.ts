import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';
import { CartService } from '../cart/cart-service';
import { WishListService } from '../wish-list/wish-list-service';
import { LoginService } from '../login/login.service';
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
        private _location: Location,
        private _cartService: CartService,
        private _wishListService: WishListService,
        private _userService: LoginService) {
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
      this._wishListService.addToWishList(this.id).subscribe(result => console.log("done-to"));
    }

    addToCart() {
      this._cartService.addToCart(this.id).subscribe(result => console.log("done"));
    }

    isAuthenticated(): boolean {
      return this._userService.isUserAuthenticated();
    }
}
