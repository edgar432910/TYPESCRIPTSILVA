import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseProductos from './base-productos';

@Entity({name: "proveedor"})
export class Proveedor extends BaseProductos{
    @PrimaryGeneratedColumn({name: "id_proveedor"})
    idProveedor:number;

    



}