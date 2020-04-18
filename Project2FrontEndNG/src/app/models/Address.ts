export class Address {
    
    username: string;
    state: String;
    city: String;
    address: string;
    address2 : string;
    zipcode: number;
    comments: String;


    constructor(username: string,  state: String, city: String, address: string, address2: string,  zipcode: number, comments: String, ) {
        
        this.username = username;
        this.state = state;
        this.city = city;
        this.address = address;
        this.address2 = address2;
        this.zipcode = zipcode;
        this.comments = comments;
   


        }

  }