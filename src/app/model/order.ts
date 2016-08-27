import { LineItem } from './line-item';
import { OrderInfo } from './order-info';

export class Order {
    identifier: string;
    userId: string;
    lineItemList: LineItem[];
    orderInfo: OrderInfo;
}
