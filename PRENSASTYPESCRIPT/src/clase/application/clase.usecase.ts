import { BaseUseCase } from "src/shared/application/base.usecase";

import { ClaseModel } from '../domain/clase.model';
import ClaseRepository from "./clase.repository";
import Result from '../../shared/application/result.interface';


export default class ClaseUseCase extends BaseUseCase<ClaseModel, ClaseRepository> {

    constructor( public repository:ClaseRepository){
        super(repository);
    }

  async  getFilter():Promise<Result<ClaseModel>>{
        return this.repository.getFilter();
  }
  
}