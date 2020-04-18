export class DeliveryDriver{
   
    driverUsername: string;
    ousername :string;
    oid :number;



    constructor(driverUsername: string, ousername: string, oid){
        this.driverUsername = driverUsername;
        this.ousername = ousername;
        this.oid = oid;
    }
}