import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
export default class Base{
    @Column({type: 'datetime'})
    dateCreate:Date;
    @Column({type: 'datetime'})
    dateUpdate:Date;

    @Column({type:"boolean", default:true})
    active:boolean;

    @BeforeInsert()
    addDateCreate(){
        this.dateCreate = new Date();
        this.dateUpdate = new Date();

    }

    @BeforeUpdate()
    addDateUpdate(){
        this.dateUpdate = new Date();
       
    }
}