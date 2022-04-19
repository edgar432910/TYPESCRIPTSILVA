import App from "../app";
import http from 'http';
import { Application } from "express";
import IBootstrap from "@bootstrap/bootstrap.interface";
import yenv from "yenv";

const env = yenv();

export default class ServerBootstrap implements IBootstrap{

    constructor(
        private App:Application
    ){    }

  initialize():Promise<unknown>{

    return new Promise((resolve, reject)=>{
        const server = http.createServer(this.App);
        server.listen(env.PORT)
        .on("listening", ()=>{
            console.log("server on " + env.PORT);
            resolve(true);
        })
        .on("error",(err)=>{
            reject(err)
        })
    
    })

  }




}