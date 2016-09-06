import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';

@Injectable()
export class WishListService {
  private _mockUrl = 'app/model/products.json';
  private _wishListUrl = 'http://localhost:8080/rest/wishList';
  errorMessage: string;

  constructor(private _http: Http) {

  }

  getWishList(): Observable<Product[]> {
    let headers = new Headers({});
    return this._http.get(this._wishListUrl, {headers: headers, withCredentials: true})
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeFromWishList(productId: string) {
    let url = this._wishListUrl + '/' + productId;
    console.log(url);
    let headers = new Headers({});
    return this._http.delete(url, {headers: headers, withCredentials: true})
  }

  addToWishList(productId: string) {
    let url = this._wishListUrl + '/' + productId;
    console.log(url);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post(url, '', {headers: headers, withCredentials: true})
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("THIS IS THE BODY: ");
    console.log(body);
    //TODO: fix this workaround for creating the picture url
    if (body === null) {
      return {};
    }
    for (let product of body) {
      product.productPicture = 'http://localhost:8080/product/' + product.identifier + '/picture';
      console.log("TIMES");
    }
    if (body.length === undefined) {
      body.productPicture = 'http://localhost:8080/product/' + body.identifier + '/picture';
    }
    return body || {};
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }

}
