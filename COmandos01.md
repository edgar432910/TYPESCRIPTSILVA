# Inicializar el repositorio
npm init -y

# Arquitectura Hexagonal
Interactua con la BD
Enviar correo
Event broket( enviar notificaciones, recibir notificaciones)

# capa infraestructura:
## Operation
 capa externa: se conecta a un elemento externo, no piensa, solo ejecuta  

# capa de aplicacion
## A
capa que piensa, realiza las logicas, ingresar un usuario, evalua si esta registrado

# capa de domino
# no conoce las capas superiores
guardar las entedidas, una representacion de la bd, representacion, modelo


# Alta cohesion
una sola clase, todo, 

# Baja cohesion
no todo en un solo archivo

# Sustitucion
Invertir depencias
infraestructura depende de aplicacion, y aplicacion implementa la interfaz


## Instalar express 
npm init -y
npm i express --save
# Cambio reinicia 
npm i nodemon -D

# Comandos
npm run start
npm start

# hilo -> proceso -> solicitud, por peticion

# UNICO hilo, si se cae, mesa de partes 
## el hilo envia la tarea a un proceso i/o  
## multihilo, libreria


# operacion bloqueante, DeadLock
tabla A bloquea tabla B y bloquea tabla A
# Rest, peticiones a verbos o metodos

# instalacion
npm i @types/express -D 
# dependencia de desarrollo
npm uninstall @types/express -D

# libreria para levantar la aplicacion
npm i ts-node -D
# crear el comando en package.json

npm i -g ts-node
npm i typescript -g

npm i typescript -D

# mimetypes list

# nodemon.json propiedad watch

# sistema de ambulancias
medicos, usuarios, pilotos, historias

# crear carpetas
user
mkdir infractucture aplication domain adapter( medio por donde se conecta, manejo de rutas)

empieza por dominio, crear la interface
vas por la aplicacion, creas el repository

# cambiar la configuracion con ts
tsc init 
tsc --init
npm list -g

# rutas largas 
npm i -D tsconfig-paths


## doker destokp

docker pull mysql:8


docker images
# ejecutar
docker rm -f mysql:8
docker run -d --name mysql8 -e MYSQL_ROOT_PASSWORD=root -p 4000:3306 mysql:8

# crear la configuracion
docker create mysql:8 --name mysql8
docker start mysql8 

# typeorm
npm i typeorm -g
typeorm init --name poc_typeorm --database mysql 

 package.json: "ts-node": "10.7.0",

 # relacion one to one

 git stash 


 # configurar la BD del proyecto
 configurar datos dentro del codigo de
 npm i yenv
 npm i typeorm
 npm i mysql2 reflect-metadata 
 boostrap database

# update a a1 juntar 
npm i lodash
npm i -D @types/lodash

# validaciones orm
joi dev


# jwt
npm i uuid
npm i --save-dev @types/uuid

# contrasena
npm i bcryptjs
npm i --save-dev @types/bcryptjs

# generar el access token, fechas moment
npm i jwt-simple
npm i moment
npm i date-fns //moderna

# img 
npm i miuter, miuter s3


# Certificado ssl
certisur.com

# Manejo de errores


# redis

# start
docker run --name some-redis -d redis

# redis 
docker run -d --name=redis-container -p 6380:6379 redis:6.0.5-alpine redis-server --requirepass todovale
-d no dar mantenimiento

1000:6379 puertoaleatorio:puertoimagen
# ver quien usa
docker -ps -a | grp 6379

# CONECTAR REDIS
npm i ioredis
npm i -D @types/ioredis

# Morgan

# Manejo de imagenes 
# miulter s3, miulter 
npm i multer multer-s3

npm i -D @types/multer @types/multer-s3

# AWS
iam> usuario> clave de accessories

# aws cli descarga desde aws

aws --versiona
# 
aws configure
node js
ID AKIA3BKUULM6PQMGXMH3
us-east-1
CLAVE c5K/2FMNO0gDtDqRYTwneVf43yTXGHNDjBSkb+Gj


# NODE LIBERIA
# npm i aws-sdk
npm i aws-sdk

{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {   
    "module": "commonjs",  // script trabajar con commonjs
    "esModuleInterop": true, // librerias de node creadas con required, commonjs 
    "resolveJsonModule": true,/* false data para testear con datos json. */
    "target": "ES2020", // typescript del 2020
    "noImplicitAny": true, // no asuma datos tipos any
    "moduleResolution": "node", // 
    "sourceMap": false, // depurar en js, lo transpilado, una foto dinamica del typescript 
    "experimentalDecorators": true, // orm para que se pueda tener decoradores
    "emitDecoratorMetadata": true, // decoradores 
    "baseUrl": "./", // la raiz del proyecto    
    "outDir": "./cache", // se transpila en la carpeta cache

  },
  "exclude": ["node_modules"], // no transpilar ningun archivo de esta carpeta
  "include": ["src/**/*.ts"], // todos los archivos dentro de la carpeta src
  "ts-node": {
    "require": ["tsconfig-paths/register"] // manejo de rutas del typescript, lee las rutas dentro del archivo paths el register
  }
}

{
    "watch":["src/"], // escucha
    "ext":"ts json",  // observando los achivos con extension
    "env": {
        "NODE_ENV":"development"  // verificar el entorno donde trabajo 
    },
    "ignore":["node_modules"], // ignore la modificacion del nodemodule
    "execMap":{
        "ts" : "ts-node" // cuando se modifique ejecuta ts-node
    },
    "verbose": true, // un poco mas de informacion de lo que sucede
    "restartable": "rs" // si modifico el nodemon , lo ejecuto con rs 

}

development:
  PORT: 3000
  DATABASES:
    MYSQL:
      HOST: localhost
      TYPE: mysql
      PORT: 4000
      DATABASE: nodepro
      USERNAME: root
      PASSWORD: root
      SYNCHRONIZE: true 
      ENTITIES: "src/entities/**/*.ts"
      EXTRA_CONNECTIONS: 10
      LOGGING: true
    REDIS:
      HOST: localhost
      PORT: 6380
      PASSWORD: todovale
  APP: 
    PAGE_SIZE: 5
  TOKEN:
    SECRECT_WORK: 6c633227-1499-40cf-9298-2435868c3ca3
    TIME_LIVE: 30
  S3:
    bucketName: cursonodejs00
    bucketPath: https://cursonodejs00.s3.amazonaws.com
production: 
  PORT: 80
  DATABASES:
    MYSQL:
      HOST: localhost
      TYPE: mysql
      PORT: 4000
      DATABASE: nodepro
      USERNAME: root
      PASSWORD: root
      SYNCHRONIZE: false 
      ENTITIES: "src/entities/**/*.ts"
      EXTRA_CONNECTIONS: 10
      LOGGING: false
  APP: 
    PAGE_SIZE: 30
  TOKEN:
    SECRECT_WORK: 6c633227-1499-40cf-9298-2435868c3ca3
    TIME_LIVE: 30
  S3:
    bucketName: cursonodejs00
    bucketPath: https://cursonodejs00.s3.amazonaws.com