

export class Order{
    o_id: number;
    u_id: number;
    a_id: number;
    price: number;
    comments: String;
    status: String;
    pickup: number;
    menuItem1: String;
    menuItem2: String;
    menuItem3: String;
    menuItem4: String;
    menuItem5: String;
    menuItem6: String;
    menuItem7: String;

    constructor(o_id: number, u_id: number, a_id: number, price: number, comments: String, status: String, pickup: number, String1: String, String2: String, String3: String, String4: String, String5: String, String6: String, String7: String,){
        this.o_id = o_id;
        this.u_id = u_id;
        this.a_id = a_id;
        this.price = price;
        this.comments = comments;
        this.status = status;
        this.pickup = pickup;
        this.menuItem1 = String1;
        this.menuItem2 = String3;
        this.menuItem3 = String2;
        this.menuItem4 = String4;
        this.menuItem5 = String5;
        this.menuItem6 = String6;
        this.menuItem7 = String7;
    }
}