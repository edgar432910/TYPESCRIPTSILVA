import { Familia } from "src/entities/familia.entity";
import BaseOperation from "src/shared/infraestructure/base.operation";
import FamiliaRepository from "../application/familia.repository";
import { FamiliaModel } from "../domain/familia.model";

export default class FamiliaOperation extends BaseOperation<FamiliaModel> implements FamiliaRepository{
    constructor(){
        super(Familia);
    }
   

}