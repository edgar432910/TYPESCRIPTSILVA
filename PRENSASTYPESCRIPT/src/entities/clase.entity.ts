import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import BaseProductos from './base-productos';
import { Familia } from './familia.entity';


@Entity({name: "clase"})
export class Clase extends BaseProductos{
    @PrimaryGeneratedColumn({name:"id_clase"})
    idClase:number;

    @ManyToOne(type => Familia, familia =>familia.id)
    familia:Familia;

    @Column({name:"utilidad"})
    utilidad:number;

}