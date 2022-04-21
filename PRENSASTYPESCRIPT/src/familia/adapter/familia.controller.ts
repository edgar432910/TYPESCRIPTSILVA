import { Request, Response } from "express";
import FamiliaUseCase from "../application/familia.usecase";
import { FamiliaModel } from "../domain/familia.model";

export default class FamiliaController{

    constructor(private useCase:FamiliaUseCase){

    }

    async list( req:Request, res:Response){
        const results = await this.useCase.list({}, [], {});

      
        res.json(results);
    }

    async getOne(req:Request, res:Response){
        const where = {id: +req.params.id}

        const results = await this.useCase.getOne(where);
        res.json(results);

    }
    async getPage(req:Request, res:Response){
        const page = +req.params.page


        const results = await this.useCase.getPage(page,{}, [], {
            });
        
        res.json(results);
        
    }

    async insert(req:Request, res:Response){
        const body = req.body;
        const familia: FamiliaModel = {
            nombre: body.nombre,
            

        }
        const results = await this.useCase.insert(familia);
        
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