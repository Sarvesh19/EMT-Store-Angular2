import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../model/Product';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../category/category-service';
import 'rxjs/Rx'; 

@Injectable()
export class ProductService {
    private _productUrl = 'app/model/products.json';
    constructor(private _http: Http) {

    }
/*
    createNewProduct(name: string, price: string, quantity: string, description: string, picture: File) {
        let body = 'name=' +name+ '&category=MySubCategory&price=' +price+ '&quantity=' +quantity+ '&description=' +description+ '&picture=' +picture;
        /*var formData = new FormData();
        formData.append("name", name);
        formData.append("category", "MySubCategory");
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("picture", picture);
        let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
        let options = new RequestOptions({ headers: headers});

        return this._http.post(this._productUrl, body, options).map(response => response.json());
    }
*/
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    getProducts(): Observable<Product[]> {
        return this._http.get(this._productUrl)
            .map((response:Response) => <Product[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProductsByCategoryID(id: string): Observable<Product[]> {
        return this.getProducts()
            .map((products: Product[]) => products.filter(p => p.productCategory == id));
    }

    getProduct(id: string): Observable<Product> {
        console.log("ENTERING SERVICE");
        return this.getProducts()
            .map((products: Product[]) => products.find(p => p.identifier == id))
            
    }
}