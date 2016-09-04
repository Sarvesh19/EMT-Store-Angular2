export class Product {
    identifier: string;
    productName: string;
    productCategory: string;
    description: string;
    price: string;
    quantity: string;
    //isAvailable: string;
    picture: string;
    constructor() {}

    calculateSubTotal(): number {
        let priceNum = +this.price;
        let quantityNum = +this.quantity;
        return priceNum * quantityNum;
    }
}