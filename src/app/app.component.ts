import { Component } from '@angular/core';
import { RouterOutlet, RouterLink,RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from './product/product-service';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES,RouterLink,RouterOutlet],
  providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
}
