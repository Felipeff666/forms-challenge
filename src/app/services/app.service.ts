import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  //PokeApi https://pokeapi.co/
  //https://pokeapi.co/api/v2/pokemon/ditto

  constructor(private http:HttpClient) { }

  private pokemones = 'https://pokeapi.co/api/v2/pokemon/pikachu'

  public obtenerDatos(){
    return this.http.get<any[]>(this.pokemones)
  }

}
