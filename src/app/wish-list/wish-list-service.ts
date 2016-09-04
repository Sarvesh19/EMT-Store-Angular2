import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import 'rxjs/Rx';

@Injectable()
export class WishListService {
    private _mockUrl = 'app/model/products.json';
    private _wishListUrl = 'http://localhost:8080/rest/wishList';
    errorMessage: string;

    constructor(private _http: Http) {

    }

    getWishList() : Observable<Product[]> {

        return this._http.get(this._mockUrl)
                .map((response: Response) => <Product[]>response.json())
                .do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);

        /*
        return this._http.get(this._wishListUrl)
                .map((response: Response) => <Product[]>response.json())
                .do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
        */
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}