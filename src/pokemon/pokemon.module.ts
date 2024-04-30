import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonShema } from './entities/pokemon.entity';


@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  exports:[ MongooseModule ],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonShema,
      }
    ])
  ]
})
export class PokemonModule {}
