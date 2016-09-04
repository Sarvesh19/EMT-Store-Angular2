import { LineItem } from './line-item';
import { Product } from './product';

export class CartItem {
    lineItem: LineItem;
    product: Product;
}