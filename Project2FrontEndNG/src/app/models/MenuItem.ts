export class MenuItem{
    stock_id: number;
    descriptions: String;
    productName: String;
    price: number;

    constructor(descriptions: String, productName: String, price: number){
        this.descriptions = descriptions;
        this.productName = productName;
        this.price = price;
    }
}