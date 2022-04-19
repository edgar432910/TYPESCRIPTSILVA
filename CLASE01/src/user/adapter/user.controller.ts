import { IError } from '@shared/helpers/errors.helps';
import { Request, Response } from 'express';
import { reject } from 'lodash';


import UserUseCase from '../application/user.usecase';
import { UserModel } from '../domain/user.model';

const functionReject = ()=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const error:IError =new Error("error de promesa")
            error.status =500;
        reject(error);

        }, 2000)
    })


export default class UserController{

    constructor(private useCase:UserUseCase){

    }

    async list( req:Request, res:Response){


        // const results = await functionReject();
        const results = await this.useCase.list({}, [], {lastname: "ASC", name: "ASC"});

        res.json(results);
    }

    async getOne(req:Request, res:Response){
        const where = {id: +req.params.id}

        const results = await this.useCase.getOne(where);
        res.json(results);

    }

    

    async getPhoto(req:Request, res:Response){
        const where = {id: +req.params.id}

        const results = await this.useCase.getPhoto(where);

        const Obj = Buffer.from(results.Body).toString("utf-8");



        res.type("image/png").send(Obj);

    }

    async getPage(req:Request, res:Response){
        const page = +req.params.page


        const results = await this.useCase.getPage(page,{}, [], {lastname: "ASC", name: "ASC" });
        
        res.json(results);
        
    }

    async insert(req:Request, res:Response){
        const body = req.body;
       
        const User:Partial<UserModel> = {
            name: body.name,
            lastname: body.lastname,
            email: body.email,
            password: body.password,
            roles: body.roles,
            photo:body.photo,
        }
        const results = await this.useCase.insert(User);
        res.json(results);
    }

    async update(req:Request, res:Response){
        const body = req.body;
        const where = {id: +req.params.id}; // id del registro

        const results = await this.useCase.update(body, where);
        res.json(results);
    }

    async delete(req:Request, res:Response){
        const where = {id: +req.params.id};
        const results = await this.useCase.delete(where);
        res.json(results);
    }
  
}