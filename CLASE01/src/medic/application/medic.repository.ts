import { BaseRepository } from "@shared/application/base.repository";
import { MedicModel } from '../domain/medic.model';
import Result from '../../shared/application/result.interface';

export default interface MedicRepository extends BaseRepository<MedicModel>{

    getUniqueMedic():Promise<Result<MedicModel>>;

    getReportMedic(): Promise<Result<MedicModel>>;
}