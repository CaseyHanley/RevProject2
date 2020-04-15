import { identifierModuleUrl } from '@angular/compiler';

export class User{

   
    username :string;
    password :string;
    firstname :string;
    lastname :string;
    account_type :string;


    constructor(username :string, password :string, firstname :string, lastname :string, account_type :string){
            this.username=username;
            this.password=password;
            this.firstname=firstname;
            this.lastname=lastname;
            this.account_type=account_type;
        }

}