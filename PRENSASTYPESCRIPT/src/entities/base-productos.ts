import { Column } from 'typeorm';
import Base from './base';
import { User } from './usuario.entity';
export default class BaseProductos extends Base{
    
  
    @Column({type:"varchar", length:50})
    nombre:string;

  

}