import { BaseUseCase } from "@shared/application/base.usecase";

import UserRepository  from './user.repository';
import { UserModel } from '../domain/user.model';
import Result from "@shared/application/result.interface";
import { UserService } from "./user.service";
import RoleRepository from "@role/application/role.repository";
import { RoleModel } from "@role/domain/role.model";
import { FamilyRefreshTokens } from '../../entities/family-refresh-tokens.entity';
import { FamilyRefreshTokensModel } from '../../family-refreshtokens/domain/family-refreshtokens.model';
import { UserListDTO } from "@user/domain/user-list.dto";
import AWS from "aws-sdk";
import yenv from "yenv";

const S3 = new AWS.S3();

const env = yenv();

export default class UserUseCase extends BaseUseCase<UserModel, UserRepository> {

    constructor( public repositoryUser:UserRepository,
         private repositoryRole:RoleRepository, 
        ){
        super(repositoryUser);
    }

   

    override async insert(entity:Partial<UserModel>):Promise<Result<UserModel>>{
        const user:UserModel = {...entity
            // , refreshToken:UserService.generateRefreshToken()
        } as UserModel;
        
        const listRolesPromises:any[] = [];

        

        user.roles.forEach((role)=>{
            listRolesPromises.push(this.repositoryRole.getOne({id: +role}, []));
        });

        const roles:Result<RoleModel>[] = await Promise.all(listRolesPromises) 

        user.roles = roles.map((result)=>result.payload.data as RoleModel);

        // FamilyRefreshTokensRepository
        const refreshtokens = UserService.generateRefreshToken();

      

        const newModelRT:FamilyRefreshTokensModel ={refreshToken:refreshtokens}

        user.familyRefreshTokens=[newModelRT];

        // this.repositoryFamilyRefreshTokens.insert({});

        user.password = await UserService.cryptPassword(user.password);
        // user.dateExpirationRefreshToken =  add(new Date(), {seconds:10});
        const userInserted:Result<UserModel> = await this.repositoryUser.insert(user);


        return userInserted;
    }
    override async list(where:object = {} , relations:string[]=[], order:object = {}):Promise<Result<UserModel>> {
        where = {...where, active: true};
        const list = await this.repository.list(where, relations, order);

        return UserListDTO.mapping(list);
        
    }

    async getPhoto(where:Object): Promise<any>{


        const result = await this.repositoryUser.getOne(where, []);
        const user:UserModel = result.payload.data as UserModel;

        

        const params = { Bucket: env.S3.bucketName, Key: user.photo };

        return S3.getObject(params).promise();

    }

}