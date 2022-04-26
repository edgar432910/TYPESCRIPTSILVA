import { BaseRepository } from "src/shared/application/base.repository";
import Result from "src/shared/application/result.interface";
import { ClaseModel } from '../domain/clase.model';

export default interface ClaseRepository extends BaseRepository<ClaseModel>{

    getFilter():Promise<Result<ClaseModel>>;

   

}