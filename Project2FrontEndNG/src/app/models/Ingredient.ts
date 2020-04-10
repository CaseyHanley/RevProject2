export class Ingredient{
    i_id: number;
    ingredientName: String;
    price: number;

    constructor(i_id: number, ingredientName: String, price: number){
        this.i_id = i_id;
        this.ingredientName = ingredientName;
        this.price = price;
    }
}