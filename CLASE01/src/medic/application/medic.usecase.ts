import { BaseUseCase } from "@shared/application/base.usecase";
import { MedicModel } from '@medic/domain/medic.model';
import MedicRepository from './medic.repository';
import Result from "@shared/application/result.interface";

export default class MedicUseCase extends BaseUseCase<MedicModel, MedicRepository> {

    constructor( public repository:MedicRepository){
        super(repository);
    }
   async getUniqueMedic():Promise<Result<MedicModel>>{
        return this.repository.getUniqueMedic();
    }

   async getReportMedic(): Promise<Result<MedicModel>> {

        return this.repository.getReportMedic();
    }
}