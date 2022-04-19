
import BaseOperation from "@shared/infraestructure/base.operation";

import { UserModel } from '../domain/user.model';
import  UserRepository  from '../application/user.repository';
import { User } from '../../entities/user.entity';
import Result from '../../shared/application/result.interface';
import { Repository, getRepository } from 'typeorm';
import { ResponseDto } from '../../shared/application/response.dto';

export default class UserOperation extends BaseOperation<UserModel> implements UserRepository{
    constructor(){
        super(User);
    }
  

    
}