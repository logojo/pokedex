import { Injectable } from '@nestjs/common';

import { PokeApiResponse } from './interfaces/poke-api.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/httpAdapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name)
    private readonly pokemonModel : Model<Pokemon> ,
    private readonly http : AxiosAdapter
  ) { }

  async executeSeed() {

    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemons: { name: string, no: number}[] = []

    data.results.map(({name, url}) => {
      const segments = url.split('/');
      const no : number = +segments[ segments.length - 2];

       pokemons.push({name, no });
      
    })

    this.pokemonModel.insertMany( pokemons )

    return 'Seed Executed';
  }
  
}
