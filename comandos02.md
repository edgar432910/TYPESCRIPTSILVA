# Inicializar el repositorio

# generales pc
npm i typescript -g
npm i -g ts-node
npm i typeorm -g
npm list -g

# dependencias del proyecto
npm init -y
npm i express --save
tsc --init
npm i yenv
npm i typeorm
npm i mysql2 reflect-metadata 
npm i lodash
----
npm i uuid
npm i bcryptjs
npm i jwt-simple
npm i date-fns 

# depencias de desarrollo
npm i nodemon -D
npm i @types/express -D 
npm i ts-node -D
npm i typescript -D
npm i -D tsconfig-paths
npm i -D @types/lodash
----
npm i --save-dev @types/uuid
npm i --save-dev @types/bcryptjs



# nodemon.json propiedad watch
nodemon.json
----------------
{
    "watch":["src/"],
    "ext":"ts json", 
    "env": {
        "NODE_ENV":"development"
    },
    "ignore":["node_modules"],
    "execMap":{
        "ts" : "ts-node"
    },
    "verbose": true,
    "restartable": "rs"

}
------------------

# cambiar la configuracion con 
tsc --init 

tsconfig.json
--------------
{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {   
    "module": "commonjs",
    "esModuleInterop": true,
    "resolveJsonModule": true,/* false data pruebas jsom. */
    "target": "ES2020",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "baseUrl": "./", // la raiz del proyecto    
    "outDir": "./cache",

  },
  "exclude": ["node_modules"],
  "include": ["src/**/*.ts"],
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
}

------

# paths 
tsconfig.paths.json
------------

{
    "compilerOptions": {
        "paths": {
            "@bootstrap/*":["src/bootstrap/*"],
            


        }
    }
}

-------------














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



user
mkdir infractucture aplication domain adapter( medio por donde se conecta, manejo de rutas)

empieza por dominio, crear la interface
vas por la aplicacion, creas el repository

# cambiar la configuracion con ts

# rutas largas 


## doker destokp

docker pull mysql:8


docker images
# ejecutar
docker rm -f mysql:8
docker run -d --name mysql8 -e MYSQL_ROOT_PASSWORD=root -p 4000:3306 mysql:8

# crear la configuracion
docker create mysql:8 --name mysql8
docker start mysql8 