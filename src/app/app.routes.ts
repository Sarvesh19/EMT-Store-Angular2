import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { AddNewProductComponent } from './product/add-new-product.component';
import { provideRouter, RouterConfig} from '@angular/router';

export const AppRoutes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'products/new', component: AddNewProductComponent }
];

export const AppRouterProvider = provideRouter(AppRoutes);