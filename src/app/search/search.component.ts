import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';
import {Product} from "../model/product";
import {SearchService} from "./search-service";

@Component({
  selector: 'search',
  templateUrl: 'app/search/search-list.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent implements OnInit {
  products: Product[];
  queryString: string;

  constructor(private _searchService: SearchService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.queryString = params['queryString']; // (+) converts string 'id' to a number
    console.log(this.queryString);
      this._searchService.getProducts(this.queryString).subscribe(products => {this.products = products; console.log(products);})
      // In a real app: dispatch action to load the details here.
    });
  }
}
