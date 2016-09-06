import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../model/Product';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../category/category-service';

@Injectable()
export class ProductService {
    private _productListUrl = 'http://localhost:8080/rest/category/';
    private _productGetUrl = 'http://localhost:8080/rest/product/';
    private _productPostUrl = 'http://localhost:8080/rest/product';
    constructor(private _http: Http) {

    }

    createNewProduct(product: Product, picture: File) {
      console.log("BEFORE POST");
      console.log(product.productPicture);
        let body = '-XXname=' +product.productName+ '-XXXcategory=' +product.productCategory +'-XXXprice=' +product.productPrice
          +'-XXXquantity=' +product.productQuantity +'-XXXdescription=' +product.productDescription
          +'-XXXpicture=' +picture +'-XXX';
        let headers = new Headers({ 'Content-Type': 'multipart/mixed;boundary=-XXX' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this._http.post(this._productPostUrl, body, options).map(response => response.json());
    }

    getProducts(categoryId: string): Observable<Product[]> {
      return this._http.get(this._productListUrl +categoryId)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getProductsByCategoryID(categoryId: string): Observable<Product[]> {
        return this.getProducts(categoryId);
    }

    getProduct(productId: string): Observable<Product> {
      return this._http.get(this._productGetUrl +productId)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log("THIS IS THE BODY: ");
      console.log(body);
      //TODO: fix this workaround for creating the picture url
      if(body === null) {
        return {};
      }
      for(let product of body) {
        product.productPicture = 'http://localhost:8080/product/' +product.identifier +'/picture';
        console.log("TIMES");
      }
      if(body.length === undefined) {
        body.productPicture = 'http://localhost:8080/product/' +body.identifier +'/picture';
      }
      return body || {};
    }

    private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || ' error');
    }
}
