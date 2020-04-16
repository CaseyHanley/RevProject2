

export class Order{
    o_id: number;
    username: string;
    price: number;
    comments: String;
    status: string;

    productname1: string;
    productname2: string;
    productname3: string;
    productname4: string;
    productname5: string;
    productname6: string;
    productname7: string;
    quantity1: number;
    quantity2: number;
    quantity3: number;
    quantity4: number;
    quantity5: number;
    quantity6: number;
    quantity7: number;

    constructor(username: string, price: number, comments: string, status: string, pickup: number,  menuItem1: string,
        menuItem2: string,
        menuItem3: string,
        menuItem4: string,
        menuItem5: string,
        menuItem6: string,
        menuItem7: string,
        quantity1: number,
        quantity2: number,
        quantity3: number,
        quantity4: number,
        quantity5: number,
        quantity6: number,
        quantity7: number ){
       
        this.username = username;

        this.price = price;
        this.comments = comments;
        this.status = status;


        this.productname1 = menuItem1;
        this.productname2 = menuItem3;
        this.productname3 = menuItem2;
        this.productname4 = menuItem4;
        this.productname5 = menuItem5;
        this.productname6 = menuItem6;
        this.productname7 = menuItem7;
        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
        this.quantity3 = quantity3;
        this.quantity4 = quantity4;
        this.quantity5 = quantity5;
        this.quantity6 = quantity6;
        this.quantity7 = quantity7;
    }
}