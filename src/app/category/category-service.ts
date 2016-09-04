import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 

@Injectable()
export class CategoryService {
    private _categoryUrl = 'http://localhost:8080/rest/category'; 

    constructor(private _http : Http) { }

    createNewCategory(categoryName:string,mainCategory:boolean,supCategory:Category){
 
        let body = 'name=' +categoryName +'&mainCategory=' +mainCategory+'&supCategory=' +supCategory;
        //console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
 
        return this._http.post(this._categoryUrl, body,options);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    getAllCategories(): Observable<Category[]> {
        return this._http.get(this._categoryUrl,{withCredentials:true})
            .map((response:Response) => <Category[]>response.json())
            .do(data => console.log("All categories: " + JSON.stringify(data)))
            .catch(this.handleError);
            
    }

}