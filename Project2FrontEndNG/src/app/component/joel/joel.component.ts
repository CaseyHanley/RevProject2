import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joel',
  templateUrl: './joel.component.html',
  styleUrls: ['./joel.component.css']
})
export class JoelComponent implements OnInit {

  cardPaid :string = ''; //change to "Payment Authorized" after they hit submit
  address :string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitCC() {
    this.cardPaid = "Payment Authorized";
  }
  /*submitCC() {
    //console.log(this.validateInputField());

    let creditcard = new creditcard(this.cc_num, this.exp_date, this.cardholder_name);
    this.pokeService.addPokemon(pokemon).subscribe(
      (response) => {
        console.log(response);
        this.pokemonList.push(response);//dynamically adds it to list on front end

      },
      (response) => {
        console.log("Failed to add pokemon.");
        console.log(response);
      }
    );
  }*/

}
