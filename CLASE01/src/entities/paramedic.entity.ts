import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import BasePersonal from './base-personal';

@Entity({name: "paramedic"})
export class Paramedic extends BasePersonal{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:50})
    document:string;

    @Column({type:"int", nullable:false})
    typeDocument:number;

 


}