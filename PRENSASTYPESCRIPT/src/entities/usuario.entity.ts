import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Base from './base';


@Entity({name:"user"})
export class User extends Base{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar", length:100, unique:true})
    email:string;
    @Column({type:"varchar", length:100})
    password:string;
    

    // @Column({type: 'datetime', nullable:true})
    // dateExpirationRefreshToken: Date ;

    
}