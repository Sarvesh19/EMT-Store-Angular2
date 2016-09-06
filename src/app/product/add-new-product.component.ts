import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-service';
import {Category} from "../model/category";
import { Http } from '@angular/http';
import { CategoryService } from '../category/category-service';
import { LoginService } from '../login/login.service';

@Component({
    templateUrl: 'app/product/add-new-product.html',
    styleUrls: ['app/product/add-new-product.css']
})

export class AddNewProductComponent implements OnInit{
    picture: File;

  private categories: Array<Category> = new Array();
  mainCategories: Array<Category> = new Array();
  subCategories: Array<Category> = new Array();

    constructor(private _productService: ProductService,
                private _http: Http, private _categoryService: CategoryService, private userService: LoginService) {
        console.log("VLEGUVAM VO ADDNEWPRODUCTCOMPONENT");
    }

    ngOnInit() {
      //this.logging();
      this.initializeCategories();
    }

    //onChange file listener
    changeListener($event): void {
        var files = $event.target;
        this.picture = files.files[0];
        console.log(this.picture);
    }

    onSubmit(data) {
      console.log("NEW");
      let product = data.product;
      product.productCategory = 'b759c700-7cc6-4e15-967c-f8d24a4acfe4';
        console.log("Entering here!");
        console.log(product);
        console.log(data);
        this._productService.createNewProduct(product, this.picture).subscribe(
                data => console.log(JSON.stringify(data)),
                error => console.log("Error HTTP Post Service"),
                () => console.log("Job Done Post !")
            );
    }

  private initializeCategories() {
    this._categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories.map((category) => category.mainCategory? this.mainCategories.push(category) : this.subCategories.push(category));
      }
    );
  }
// TODO: fix this !!!
  logging(): void {
    this.userService.login('admin', 'admin').subscribe(
      (result) => {
        this.userService.hasUserSuccessfullyLoggedIn().subscribe(
          (result) => { }
        );
      });
  }

}
