export class Product {
    productId: number = 0;
    productName: string = "";
    productDescription: string = "";
    productPrice: number = 0;

    constructor(productId: number, productName: string, productDescription: string, productPrice: number) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }
}
