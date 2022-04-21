import { BaseUseCase } from "src/shared/application/base.usecase";
import { FamiliaModel } from "../domain/familia.model";
import FamiliaRepository from "./familia.repository";

export default class FamiliaUseCase extends BaseUseCase<FamiliaModel, FamiliaRepository> {

    constructor( public repository:FamiliaRepository){
        super(repository);
    }
  
}