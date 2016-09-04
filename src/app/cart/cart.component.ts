import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartItem } from '../model/cart-item';
import { LineItem } from '../model/line-item';
import { CartService } from './cart-service';
import { ProductService } from '../product/product-service';
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';
import 'rxjs/Rx';


@Component({
    templateUrl: 'app/cart/cart.component.html',
    styleUrls: ['app/cart/cart.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class CartComponent implements OnInit {
    products: Product[];
    lineItems: LineItem[];
    cartItems: CartItem[];
    errorMessage: string;


    constructor(private _cartService: CartService) {

    }

    ngOnInit() {

        this._cartService.getLineItems()
            .subscribe(lineItems => this.lineItems = lineItems,
            error => this.errorMessage = <any>error,
            () => console.log("Site lineItems " + this.lineItems)
            );
        this._cartService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error,
            () => console.log("Site products " + this.products)
            );

        /*
        this._cartService.getCartItems()
            .subscribe(cartItems => this.cartItems = cartItems,
            error => this.errorMessage = <any>error,
            () => console.log("Site CartItems " + this.lineItems)
            );
        */
    }

    removeItem(product: Product) {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        console.log("se povikuva removeItem");
    }

    /*
    removeItem(product: CartItem) {
        var index = this.cartItems.indexOf(product);
        this.cartItems.splice(index, 1);
        console.log("se povikuva removeItem");
    }
    */

}