import { FamiliaModel } from "@familia/domain/familia.model";
import { BaseProductosModel } from "src/shared/domain/base-productos.model";

export interface ClaseModel extends BaseProductosModel{
    id?:number;
    utilidad:number;
    familia:FamiliaModel;
}

