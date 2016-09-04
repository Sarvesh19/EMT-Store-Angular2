import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LineItem } from '../model/line-item';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import 'rxjs/Rx'; 

@Injectable()
export class CartService {
    private _lineItemsUrl = 'app/model/line-items.json';
    private _productsUrl = 'app/model/products.json';
    private _cartItemsUrl = 'http://localhost:8080/rest/cart';

    constructor(private _http: Http) {

    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    getLineItems(): Observable<LineItem[]> {
        return this._http.get(this._lineItemsUrl)
            .map((response:Response) => <LineItem[]>response.json())
            .do(data => console.log("All LineItems: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProducts(): Observable<Product[]> {
        return this._http.get(this._productsUrl)
            .map((response:Response) => <Product[]>response.json())
            .do(data => console.log("All Products: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCartItems(): Observable<CartItem[]> {
        return this._http.get(this._cartItemsUrl)
            .map((response:Response) => <CartItem[]>response.json())
            .do(data => console.log("All CartItems: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
}