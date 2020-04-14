export class Address {
    number: number;
    streetName: string;
    line2 : string;
    city: String;
    state: String;
    postal: number;
    SpecInstr: String;
    addressID: string;

    constructor( number: number, streetName: string, line2: string,  city: String,  state: String, postal: number, SpecInstr: String, addressID: string) {
        this.number = number;
        this.streetName = streetName;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postal = postal;
        this.SpecInstr = SpecInstr;
        if (addressID != null)
            this.addressID = addressID;


        }

  }