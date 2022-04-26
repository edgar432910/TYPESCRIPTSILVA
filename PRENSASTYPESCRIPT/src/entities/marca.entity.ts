import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: "marca"})
export class Marca {

    @PrimaryGeneratedColumn({name:"id_marca"})
    idMarca:number;

    @Column({name:"utilidad"})
    utilidad:number;
}


