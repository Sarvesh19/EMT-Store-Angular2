import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Category } from '../model/category';
import { CategoryService } from './category-service';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
    selector: 'add-new-category',
    templateUrl: 'app/category/add-new-category.html'
})

export class AddNewCategoryComponent {
    mainCategory: boolean = false;
    categoryName: string = "";
    supCategory: Category = null;
    result: string = "";
    showErrorMessage: boolean = false;
    categories: Category[];
    errorMessage: string = "";

    constructor(private _categoryService: CategoryService,
        private _http: Http,
        private _router: Router) {

    }

    changeMain() {
        this.mainCategory = !this.mainCategory;
        console.log('New main state is ' + this.mainCategory);
        console.log(JSON.stringify(this.categories));
    }

    toggleShowErrorMessage() {
        this.showErrorMessage = !this.showErrorMessage;
        console.log("ERROR MESSAGE TOGGLED");
    }

    onSubmit() {

        if (!this.showErrorMessage && this.categoryName.length) {

            this._categoryService.createNewCategory(this.categoryName, this.mainCategory, this.supCategory).subscribe(//call the post
                data => this.result = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );

            console.log(this.result);
        }
        else if (this.showErrorMessage && this.categoryName.length) {
            this.showErrorMessage = false;
            this._categoryService.createNewCategory(this.categoryName, this.mainCategory, this.supCategory).subscribe(//call the post
                data => this.result = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );

            console.log(this.result);
        }
        else {
            this.showErrorMessage = true;
            //console.log(this.categoryName.length);
        }
    }

    getCategories() {
        this._categoryService.getAllCategories()
            .subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error,
            () => console.log("Site kategorii " + this.categories)
            );

    }

    ngOnInit(): void {

    }
}

