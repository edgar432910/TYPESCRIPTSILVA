
import BaseOperation from "src/shared/infraestructure/base.operation";

import { ClaseModel } from '../domain/clase.model';
import ClaseRepository from '../application/clase.repository';
import { Clase } from "src/entities/clase.entity";
import Result from '../../shared/application/result.interface';
import { getRepository, Repository } from "typeorm";
import { ResponseDto } from "src/shared/application/response.dto";

export default class ClaseOperation extends BaseOperation<ClaseModel> implements ClaseRepository{
    constructor(){
        super(Clase);
    }
   
   async getFilter():Promise<Result<ClaseModel>>{
        const repository:Repository<Clase> = getRepository(Clase);
        const data:Clase[] = await repository
        .createQueryBuilder()
        .leftJoinAndSelect("familiaId", "familia")
        .getMany(); 

        console.log({data});
        return ResponseDto.format("", data);
   }
}