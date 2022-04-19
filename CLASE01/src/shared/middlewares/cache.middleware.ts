import { NextFunction, Request, Response } from "express";
import RedisBootstrap from '../../bootstrap/redis.bootstrap';

export default class CacheRedis{
    static handle(prefix: string){
        return async (req:Request, res:Response, next:NextFunction) =>{
            let key = prefix 

            if(req.params){
                for(const prop in req.params){
                    key += `_${req.params[prop]}`
                }
            }
            if(req.query){
                for(const prop in req.params){
                    key += `_${req.query[prop]}`
                }
            }
            if(req.body){
                for(const prop in req.params){
                    key += `_${req.body[prop]}`
                }
            }
            const result = await RedisBootstrap.get(key);
            if(result){
                console.log("Ejecucion desde Redis")
                res.json(JSON.parse(result));
            }
            else{ 
                res.locals.cacheKey = key;
                next();
            }
        }
    }
}