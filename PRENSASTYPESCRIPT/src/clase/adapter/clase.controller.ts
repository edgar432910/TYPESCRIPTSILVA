import { Request, Response } from "express";

import ClaseUseCase from '../application/clase.usecase';
import { ClaseModel } from '../domain/clase.model';
import { Familia } from '../../entities/familia.entity';

export default class ClaseController{

    constructor(private useCase:ClaseUseCase){

    }

    async list( req:Request, res:Response){
        const results = await this.useCase.list({}, ["familia"], {});

      
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
        const clase: ClaseModel = {
            nombre: body.nombre,
            utilidad:body.utilidad,
            familia: body.familia
            

        }
        const results = await this.useCase.insert(clase);
        
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

    async getFilter(req:Request, res:Response){
       
        const results = await this.useCase.getFilter();
        
        res.json(results);
    }
  
}