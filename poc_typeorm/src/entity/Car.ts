import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({name:"car"})

export class Car{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    manufacturer:string;

    @Column()
    description:string;

    @Column()
    color:string;

    @Column()
    year:number;

    @Column()
    isSold:boolean;

    // @OneToOne(type => User, user=>user.car, {cascade:true})
    // @JoinColumn() // crear un usuario lo salva
    // user:User;

    @ManyToOne((type) => User, user=>user.cars)
    user:User;

}