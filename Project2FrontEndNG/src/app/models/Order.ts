

export class Order{
    username: string;
    price: number;
    comments: String;
    status: string;
    pickup: number;

    menuItem1: string;
    menuItem2: string;
    menuItem3: string;
    menuItem4: string;
    menuItem5: string;
    menuItem6: string;
    menuItem7: string;
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
        this.pickup = pickup;

        this.menuItem1 = menuItem1;
        this.menuItem2 = menuItem3;
        this.menuItem3 = menuItem2;
        this.menuItem4 = menuItem4;
        this.menuItem5 = menuItem5;
        this.menuItem6 = menuItem6;
        this.menuItem7 = menuItem7;
        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
        this.quantity3 = quantity3;
        this.quantity4 = quantity4;
        this.quantity5 = quantity5;
        this.quantity6 = quantity6;
        this.quantity7 = quantity7;

}
}