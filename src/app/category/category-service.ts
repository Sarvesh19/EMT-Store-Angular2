import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
    private _categoryUrl = 'http://localhost:8080/rest/category';

    constructor(private _http : Http) { }

    createNewCategory(categoryName:string,isMain:boolean,parentCategory:Category){

        let body = 'name=' +categoryName +'&mainCategory=' +isMain+'&parentCategory=' +parentCategory;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this._http.post(this._categoryUrl, body, options);
    }

    getAllCategories(): Observable<Category[]> {
        return this._http.get(this._categoryUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

    private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || ' error');
    }
}
