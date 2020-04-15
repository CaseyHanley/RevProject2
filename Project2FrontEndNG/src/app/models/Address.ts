export class Address {
    a_id: string;
    address: string;
    address2 : string;
    city: String;
    state: String;
    zipcode: number;
    comments: String;
    uid:number;

    constructor(address: string, address2: string,  city: String,  state: String, zipcode: number, comments: String, a_id: string, uid:number) {

        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.comments = comments;
        if (a_id != null)
            this.a_id = a_id;
        if (uid != null)
            this.uid = uid;


        }

  }