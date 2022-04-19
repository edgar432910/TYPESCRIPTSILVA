import { BaseRepository } from "@shared/application/base.repository";

import { UserModel } from '../domain/user.model';
import Result from '../../shared/application/result.interface';

export default interface UserRepository extends BaseRepository<UserModel>{

    
}