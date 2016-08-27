import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-service';
import { Http } from '@angular/http';
import { CategoryService } from '../category/category-service';
import 'rxjs/Rx'; 

@Component({
    templateUrl: 'app/product/add-new-product.html',
    styleUrls: ['app/product/add-new-product.css']
})

export class AddNewProductComponent implements OnInit{
    name: string;
    category: string = "SubCategory";
    price: string;
    quantity: string;
    description: string;
    picture: File;

    constructor(//private _productService: ProductService,
        private _http: Http//,
        //private _categoryService: CategoryService
        ) {
        console.log("VLEGUVAM VO ADDNEWPRODUCTCOMPONENT");
    }

    ngOnInit() {
        console.log("VLEGUVAM VO ADDNEWPRODUCTCOMPONENT");
    }

    //onChange file listener
    changeListener($event): void {
        var files = $event.target;
        this.picture = files.files[0];
        console.log(this.picture);
    }

    onSubmit() {
        console.log("Entering here!");
        /*this._productService.createNewProduct(this.name,this.price,this.quantity,this.description,this.picture).subscribe(//call the post
                data => console.log(JSON.stringify(data)), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );*/
    }


}