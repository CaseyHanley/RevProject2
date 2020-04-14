import { MenuItem } from './MenuItem';

export class Order{
    o_id: number;
    u_id: number;
    a_id: number;
    price: number;
    comments: String;
    status: String;
    pickup: number;
    menuItem1: MenuItem;
    menuItem2: MenuItem;
    menuItem3: MenuItem;
    menuItem4: MenuItem;
    menuItem5: MenuItem;
    menuItem6: MenuItem;
    menuItem7: MenuItem;

    constructor(o_id: number, u_id: number, a_id: number, price: number, comments: String, status: String, pickup: number, MenuItem1: MenuItem, MenuItem2: MenuItem, MenuItem3: MenuItem, MenuItem4: MenuItem, MenuItem5: MenuItem, MenuItem6: MenuItem, MenuItem7: MenuItem,){
        this.o_id = o_id;
        this.u_id = u_id;
        this.a_id = a_id;
        this.price = price;
        this.comments = comments;
        this.status = status;
        this.pickup = pickup;
        this.menuItem1 = MenuItem1;
        this.menuItem2 = MenuItem3;
        this.menuItem3 = MenuItem2;
        this.menuItem4 = MenuItem4;
        this.menuItem5 = MenuItem5;
        this.menuItem6 = MenuItem6;
        this.menuItem7 = MenuItem7;
    }
}