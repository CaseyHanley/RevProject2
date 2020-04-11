import { identifierModuleUrl } from '@angular/compiler';

export class User{

    u_id :number;
    username :string;
    password :string;
    firstname :string;
    lastname :string;
    account_type :string;


    constructor(u_id :number, username :string, password :string, firstname :string, lastname :string, account_type :string){
            this.u_id=u_id;
            this.username=username;
            this.password=password;
            this.firstname=firstname;
            this.lastname=lastname;
            this.account_type=account_type;
        }

}