
import BaseOperation from "@shared/infraestructure/base.operation";

import { RoleModel } from '../domain/role.model';
import RoleRepository from '../application/role.repository';
import { Role } from '../../entities/role.entity';

export default class RoleOperation extends BaseOperation<RoleModel> implements RoleRepository{
    constructor(){
        super(Role);
    }
  

}