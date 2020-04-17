

export class Order{
    oid: number;
    ousername: string;
    price: number;
    comments: String;
    status: string;

    productname1: string;
    productname2: string;
    productname3: string;
    productname4: string;
    productname5: string;
    productname6: string;
    productname7: string;
    quantity1: number;
    quantity2: number;
    quantity3: number;
    quantity4: number;
    quantity5: number;
    quantity6: number;
    quantity7: number;

    constructor(oid :number, ousername: string, price: number, comments: string, status: string, productname1: string,
        productname2: string,
        productname3: string,
        productname4: string,
        productname5: string,
        productname6: string,
        productname7: string,
        quantity1: number,
        quantity2: number,
        quantity3: number,
        quantity4: number,
        quantity5: number,
        quantity6: number,
        quantity7: number ){
       
        this.oid = oid;
        this.ousername = ousername;
        this.price = price;
        this.comments = comments;
        this.status = status;
        this.productname1 = productname1;
        this.productname2 = productname2;
        this.productname3 = productname3;
        this.productname4 = productname4;
        this.productname5 = productname5;
        this.productname6 = productname6;
        this.productname7 = productname7;
        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
        this.quantity3 = quantity3;
        this.quantity4 = quantity4;
        this.quantity5 = quantity5;
        this.quantity6 = quantity6;
        this.quantity7 = quantity7;

    }


}
