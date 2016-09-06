import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, RouterLink, RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { SearchService } from './search/search-service';
import { SearchComponent } from './search/search.component';
import {LoginService} from "./login/login.service";
//import 'rxjs/Rx';
import './rxjs-operators';
import {HomeComponent} from "./home/home.component";
import {FORM_DIRECTIVES} from "@angular/forms";
import {CategoryService} from "./category/category-service";
import {MenuComponent} from "./menu/menu.component";
import {AddNewProductComponent} from "./product/add-new-product.component";
import {ProductListComponent} from "./product/product-list.component";
import {ProductService} from "./product/product-service"
import { WishListService } from './wish-list/wish-list-service';
import { CartService } from './cart/cart-service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, HomeComponent, MenuComponent, AddNewProductComponent, ProductListComponent, SearchComponent,
    ROUTER_DIRECTIVES, RouterLink, RouterOutlet, FORM_DIRECTIVES],
  providers: [LoginService, CategoryService, ProductService, CartService, WishListService, SearchService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
}
