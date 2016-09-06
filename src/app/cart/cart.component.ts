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
    cartItems: CartItem[];
    errorMessage: string;


    constructor(private _cartService: CartService) {

    }

    ngOnInit() {
        this._cartService.getCartItems()
            .subscribe(cartItems => this.cartItems = cartItems,
            error => this.errorMessage = <any>error
            );
    }


    removeItem(productId: string) {
      this._cartService.removeProductFromCart(productId).subscribe(result => console.log("DONE"));
    }

}
