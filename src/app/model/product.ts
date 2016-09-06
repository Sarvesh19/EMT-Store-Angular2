export class Product {
    identifier: string;
    productName: string;
    productCategory: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    productAvailability: string;
    productPicture: string;
    constructor() {}

    calculateSubTotal(): number {
        let priceNum = +this.productPrice;
        let quantityNum = +this.productQuantity;
        return priceNum * quantityNum;
    }
}
