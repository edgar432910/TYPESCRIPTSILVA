import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import BasePersonal from './base-personal';

@Entity({name: "medic"})
export class Medic extends BasePersonal{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:50})
    cmp:string;

    @Column({type:"varchar", length:50})
    document:string;

    @Column({type:"int", nullable:false})
    typeDocument:number;

 


}