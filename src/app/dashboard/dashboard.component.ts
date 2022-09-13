import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemonDetails: any = {};

  subscription: any;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private pokemonService: PokemonService) { }

  pokemonForm = this.fb.group({
    pokemonName: ['',[Validators.required]],
  });

  ngOnInit(): void {
    // Option 3 with behaviorsubject and subscribing to it
    // this.subscription = this.pokemonService.getPokemon().subscribe((pokemonDetails) => {
    //   console.log(pokemonDetails);
    // })
  }

  getPokemon() {
    const pokemonName = this.pokemonForm.value['pokemonName'];
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  
  // Option 1 way of doing a HTTP call
  //   this.http.get(apiURL).subscribe((res: any)=>{
  //     console.log(res);
  // });

  // Option 2 of doing a HTTP call with Rxjs lastValueFrom
    // let promise = new Promise(() => {
    //   let apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    //   console.log(apiURL)
    //   lastValueFrom(this.http.get(apiURL)).then(
    //       (res: any) => { // Success
    //         console.log(res);
    //       }
    //     )
    // });
    // return promise;

    // 3rd option option with a service that has behaviorsubject
    // this.pokemonService.fetchPokemon(pokemonName);

  }

}
