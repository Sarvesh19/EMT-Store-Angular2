import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { WishListService } from './wish-list-service';
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';
import 'rxjs/Rx';

@Component({
    templateUrl: 'app/wish-list/wish-list.component.html',
    styleUrls: ['app/wish-list/wish-list.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class WishListComponent implements OnInit{
    wishList: Product[];

    constructor(private _wishListService: WishListService) {

    }

    ngOnInit() {
        this._wishListService.getWishList()
        .subscribe(wishList => this.wishList = wishList),
        () => console.log(" WISHLIST: " + this.wishList)
    }

    removeFromWishList(identifier : string) {
      this._wishListService.removeFromWishList(identifier).subscribe(result => console.log("done-to"));
    }

}
