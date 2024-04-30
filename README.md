<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


#Ejecutar en desarrollo

1. clonar el repositorio
2. ejecutar

```
npm install
```

3. tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Configurar variables de entorno creando el archivo __.env__

6. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

7. Reconstruir base de datos con el seed

```
http://localhost:3000/api/v2/seed
```

##Stack usado
*MongoDB
*NestJS