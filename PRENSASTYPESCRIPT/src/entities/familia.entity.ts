import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import BaseProductos from "./base-productos";

@Entity({name: "familia"})
export class Familia extends BaseProductos{
    @PrimaryGeneratedColumn({name:"id_familia"})
    id:number;



}