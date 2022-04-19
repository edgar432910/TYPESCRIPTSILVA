import { Request, Response } from 'express';

import RoleUseCase from '../application/role.usecase';
import { RoleModel } from '../domain/role.model';
export default class RoleController{

    constructor(private useCase:RoleUseCase){

    }

    async list( req:Request, res:Response){
        const results = await this.useCase.list({}, [], {name: "ASC"});

        res.json(results);
    }

    async getOne(req:Request, res:Response){
        const where = {id: +req.params.id}

        const results = await this.useCase.getOne(where);
        res.json(results);

    }
    async getPage(req:Request, res:Response){
        const page = +req.params.page


        const results = await this.useCase.getPage(page,{}, [], {name: "ASC"});
        
        res.json(results);
        
    }

    async insert(req:Request, res:Response){
        const body = req.body;
        const Role: RoleModel = {
            name: body.name,
            actions: body.actions

        }
        const results = await this.useCase.insert(Role);
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