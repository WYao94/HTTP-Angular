import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    private pokemonDetails = new BehaviorSubject({});

    private pokemonDetails$ = this.pokemonDetails.asObservable();


    constructor(private http: HttpClient) { }

    fetchPokemon(pokemonName: any) {
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        lastValueFrom(this.http.get(apiURL)).then(
            (res: any) => { 
                this.pokemonDetails.next(res);
                // console.log(res);
            }
        )
    }

    getPokemon() {
        return this.pokemonDetails$;
    }

}