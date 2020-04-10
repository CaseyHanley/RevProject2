import { MenuItem } from './MenuItem';

export class Order{
    o_id: number;
    u_id: number;
    a_id: number;
    price: number;
    comments: String;
    status: String;
    pickup: number;
    food: MenuItem[];

    constructor(o_id: number, u_id: number, a_id: number, price: number, comments: String, status: String, pickup: number, food: MenuItem[]){
        this.o_id = o_id;
        this.u_id = u_id;
        this.a_id = a_id;
        this.price = price;
        this.comments = comments;
        this.status = status;
        this.pickup = pickup;
        this.food = food;
    }
}