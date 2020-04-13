export class DiscountCode{
    dc_id: number;
    discountName: String;
    discountAmmount: number;

    constructor(dc_id: number, discountName: String, discountAmmount: number){
        this.dc_id = dc_id;
        this.discountName = discountName;
        this.discountAmmount = discountAmmount;
    }
}