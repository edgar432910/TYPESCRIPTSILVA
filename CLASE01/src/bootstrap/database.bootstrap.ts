import IBootstrap from "./bootstrap.interface";
import yenv from "yenv"
import {  createConnection, DataSource } from 'typeorm';
import { Medic } from '../entities/medic.entity';


const env = yenv();
let client:any;

export class DatabaseBootstrap implements IBootstrap {
    async initialize(): Promise<unknown> {
        return new Promise((resolve, reject) => {
            const parametersConnection = {
                host: env.DATABASES.MYSQL.HOST,
                type: env.DATABASES.MYSQL.TYPE,
                username: env.DATABASES.MYSQL.USERNAME,
                password: '1234',
                database: env.DATABASES.MYSQL.DATABASE,
                port: env.DATABASES.MYSQL.PORT,
                entities: [env.DATABASES.MYSQL.ENTITIES],
                synchronize: env.DATABASES.MYSQL.SYNCHRONIZE,
                logging: env.DATABASES.MYSQL.LOGGING,
            }
           
            
         /*    const AppDataSource = new DataSource(parametersConnection);

            AppDataSource.initialize().then(async (connection) => {

                console.log("Connected to database")
                client=connection;
                resolve(true);
                
              }).catch(error => reject(error)); */

              createConnection(parametersConnection).then(async (connection) => {
                console.log("Connected to database")
                client=connection;
                resolve(true);
              }, error => reject(error));
        });
    }

    getConnection(){
        return client;
    }

}