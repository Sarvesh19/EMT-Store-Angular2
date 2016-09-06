import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LineItem } from '../model/line-item';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import 'rxjs/Rx';

@Injectable()
export class CartService {
    private _cartItemsUrl = 'http://localhost:8080/rest/cart';

    constructor(private _http: Http) {

    }

    getCartItems(): Observable<CartItem[]> {
      let headers = new Headers({});
        return this._http.get(this._cartItemsUrl, { headers: headers, withCredentials: true})
            .map(this.extractData)
            .catch(this.handleError);
    }

  addToCart(productId : string) {
    let url = this._cartItemsUrl +'/' +productId;
    let body = 'quantity=1';
    console.log(url);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(url, body, { headers: headers, withCredentials: true})
  }

  removeProductFromCart(productId: string) {
    let url = this._cartItemsUrl + '/' + productId;
    console.log(url);
    let headers = new Headers({});
    return this._http.delete(url, {headers: headers, withCredentials: true})
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('WOOOOOOOW');
    //TODO: fix this workaround for creating the picture url
    if(body === null) {
      return {};
    }
    for(let lineItemEntry of body) {
      lineItemEntry.productEntry.productPicture = 'http://localhost:8080/product/' +lineItemEntry.productEntry.identifier +'/picture';
      console.log("TIMES");
    }
    return body || {};
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
