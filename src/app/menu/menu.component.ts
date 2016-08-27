import {Component, OnInit} from "@angular/core";
import {Category} from "../model/category";
import {CategoryService} from "../category/category-service";

@Component({
  selector: 'menu',
  templateUrl: './app/menu/menu.component.html'
})
export class MenuComponent implements OnInit {

  private categories: Array<Category> = new Array();
  mainCategories: Array<Category> = new Array();
  subCategories: Array<Category> = new Array();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.initializeCategories();
  }

  private initializeCategories() {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories.map((category) => category.mainCategory? this.mainCategories.push(category) : this.subCategories.push(category));
      }
    );
  }
}
