export class DeliveryDriver{
   
    driverid : number;
    driverUsername: string;
    ousername :string;
    oid :number;



    constructor(driverid: number, driverUsername: string, ousername: string, oid: number){
        this.driverid = driverid;
        this.driverUsername = driverUsername;
        this.ousername = ousername;
        this.oid = oid;
    }
}