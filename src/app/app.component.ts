import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {LoginComponent} from "./login/login.component";
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

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, HomeComponent, MenuComponent, AddNewProductComponent, ProductListComponent,
    ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [LoginService, CategoryService, ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
}
