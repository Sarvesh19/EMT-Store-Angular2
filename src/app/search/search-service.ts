import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';

@Injectable()
export class SearchService {
  private _searchUrl = 'http://localhost:8080/rest/search';
  errorMessage: string;

  constructor(private _http: Http) {

  }

  getProducts(query: string): Observable<Product[]> {
    console.log("DSHFUDSFUHDF");
    let headers = new Headers({  });
    return this._http.get(this._searchUrl + '/' + query, { headers: headers, withCredentials: true})
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
