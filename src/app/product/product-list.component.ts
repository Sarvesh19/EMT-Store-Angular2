import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from './product-service';
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';

@Component({
    templateUrl: 'app/product/product-list.html',
    styleUrls: ['app/product/product-list.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    products: Product[];
    id: string;

    constructor(private _productService: ProductService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this._productService.getProductsByCategoryID(this.id).subscribe(products => {this.products = products; console.log(products);})
            // In a real app: dispatch action to load the details here.
        });
    }

}
