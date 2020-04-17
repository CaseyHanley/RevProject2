export class MenuItem{
    descriptions: String;
    productname: String;
    price: number;
    

    constructor(descriptions: String, productName: String, price: number){
        this.descriptions = descriptions;
        this.productname = productName;
        this.price = price;
        
    }
}