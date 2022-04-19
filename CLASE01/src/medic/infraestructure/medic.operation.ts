import MedicRepository from "@medic/application/medic.repository";
import BaseOperation from "@shared/infraestructure/base.operation";
import { MedicModel } from '@medic/domain/medic.model';
import { Medic } from '../../entities/medic.entity';
import { Repository, getRepository } from 'typeorm';
import { ResponseDto } from '../../shared/application/response.dto';
import Result from "@shared/application/result.interface";

export default class MedicOperation extends BaseOperation<MedicModel> implements MedicRepository{
    constructor(){
        super(Medic);
    }
    async getUniqueMedic(): Promise<Result<MedicModel>> {
        const repository:Repository<Medic> =  getRepository(Medic);
        const data:Medic[] = await repository
            .createQueryBuilder("medic")
            .select(["distinct medic.cmp"])
            // .distinctOn(["medic.cmp"])

            .where("active = true")
            .getRawMany(); // getMany certeza que viene mas de uno, pero si llega uno getRawMany

        return ResponseDto.format("", data);
    }
    async getReportMedic(): Promise<Result<MedicModel>> {
        const repository:Repository<Medic> =  getRepository(Medic);
        const data:Medic[] = await repository
            .createQueryBuilder()
            .select(["id","cmp", "paternal_surname", "maternal_surname", "name", "active"])
            // .distinctOn(["medic.cmp"])
            .orderBy("active", "DESC")
            .addOrderBy("paternal_surname", "ASC")
            .addOrderBy("maternal_surname", "ASC")
            .addOrderBy("name", "ASC")
            .getRawMany(); // getMany certeza que viene mas de uno, pero si llega uno getRawMany

        return ResponseDto.format("", data);
    }

}