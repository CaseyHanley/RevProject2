export class Address {
    streetA: string;
    line2 : string;
    city: String;
    state: String;
    postal: number;
    SpecInstr: String;
    addressID: string;

    constructor(streetA: string, line2: string,  city: String,  state: String, postal: number, SpecInstr: String, addressID: string) {

        this.streetA = streetA;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postal = postal;
        this.SpecInstr = SpecInstr;
        if (addressID != null)
            this.addressID = addressID;


        }

  }