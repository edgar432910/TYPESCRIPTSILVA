import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
export default class Base{
    @Column({type: 'datetime'})
    fecha_creacion:Date;
    @Column({type: 'datetime'})
    fecha_actualizacion:Date;

    @Column({type:"boolean", default:true})
    active:boolean;

    @BeforeInsert()
    addDateCreate(){
        this.fecha_creacion = new Date();
        this.fecha_actualizacion = new Date();

    }

    @BeforeUpdate()
    addDateUpdate(){
        this.fecha_actualizacion = new Date();
       
    }
}