import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { PokeApiResponse } from './interfaces/poke-api.interface';
import { PokemonService } from '../pokemon/pokemon.service';



@Injectable()
export class SeedService {

  private readonly axios : AxiosInstance = axios;

  constructor(
    private readonly pokemonService : PokemonService
  ) { }

  async executeSeed() {
    const { data } = await this.axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    data.results.map( ({name, url}) => {
      const segments = url.split('/');
      const no : number = +segments[ segments.length - 2];

      this.pokemonService.create({name, no })
      
    })
    return 'Seed Executed';
  }
  
}
