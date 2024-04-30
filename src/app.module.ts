import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { join } from 'path';

import { EnvConfiguration } from './config/app.config';
import { JoiVAlidationSchema } from './config/joi.validations';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ], // Archivo para validar las variables de entorno,
      validationSchema:  JoiVAlidationSchema // validado variables a traves de el paquete Joi
    }), //configuracion de variables de entorno
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), //configuración de carpeta publica para servir front
    }),
    MongooseModule.forRoot( process.env.MONGODB, {
      dbName: process.env.DBNAME
    }), // Conexion a base de datos
    PokemonModule, // Modulos de la api creados
    CommonModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
