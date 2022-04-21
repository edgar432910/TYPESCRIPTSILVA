import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"marca_vehiculo"})
export class MarcaVehiculo{

  @PrimaryGeneratedColumn({name:"id_marca_vehiculo"})
    id:number;

}
