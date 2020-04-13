export class Address{
    a_id: number;
    u_id: number;
    state: String;
    address: String;
    address2: String;
    zipcode: number;
    comments: String;

    constructor(a_id: number, u_id: number, state: String, address: String, address2: String, zipcode: number, comments: String){
        this.a_id = a_id;
        this.u_id = u_id;
        this.state = state;
        this.address = address;
        this.address2 = address2;
        this.zipcode = zipcode;
        this.comments = comments;
    }
}