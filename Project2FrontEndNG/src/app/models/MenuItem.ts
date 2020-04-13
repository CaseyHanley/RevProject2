export class MenuItem{
    stock_id: number;
    descriptions: String;
    productName: String;
    price: number;

    constructor(stock_id: number, descriptions: String, productName: String, price: number){
        this.stock_id = stock_id;
        this.descriptions = descriptions;
        this.productName = productName;
        this.price = price;
    }
}