import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import baseProductos from './base-productos';

@Entity({name:"unidad"})
export class Unidad extends baseProductos{

    @PrimaryGeneratedColumn({name:"id_unidad"})
    idUnidad:number;
}