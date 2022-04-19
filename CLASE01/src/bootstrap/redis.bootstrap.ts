import IBootstrap from './bootstrap.interface';

import IORedis from 'ioredis';
import yenv from "yenv";
import { keys } from 'lodash';

const env = yenv();

let client:any ;

export default class RedisBootstrap implements IBootstrap{
    private client:IORedis.Redis;



    initialize(): Promise<unknown> {
        return new Promise((resolve, reject) =>{
            const connectionParams = {
                host: env.DATABASES.REDIS.HOST,
                port: env.DATABASES.REDIS.PORT,
                password: env.DATABASES.REDIS.PASSWORD,
                maxRetriesPerResquest: 5,
            };

            this.client = new IORedis(connectionParams);

           this.client
           .on("connect", ()=>{
                console.log("Connectado to Redis")
                resolve(true);
            })
            .on("error", (error)=>{
                reject(error);
            });

            client = this.client;
        })
    }

    getConnection(){
        return this.client;
    }

    static async get(key: string){
        return await client.get(key);
    }

    static async set(key: string, value:any){
        await client.set(key, value, "PX", 24*60*60*1000);
    }

    // Elimina la cache de MEDI_* 
    static async clear(prefix:string=""){
       const Keys = await client.keys(prefix +"*");
       const pipeline = client.pipeline(); // tuberia conexion

       Keys.forEach((key:string) => {
            pipeline.del(key);
      });

      return pipeline.exec();
    }


}