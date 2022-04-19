
import {v4 as uuidv4} from "uuid";
import * as bcryptjs from "bcryptjs";
import { UserModel } from '../domain/user.model';
import jwt from 'jwt-simple';

import {add, getUnixTime} from "date-fns";

import yenv from "yenv";
import { TOKEN_ERROR, TOKEN_ERROR_MESSAGE } from '../../shared/enum/token-error.enum';

import { ResponseValidateToken } from "@shared/types/response.validate-token.type";

const env = yenv();



export class UserService{
    static generateRefreshToken(): string{
        return uuidv4();
    }

    static async cryptPassword(password: string): Promise<string>{
        return await bcryptjs.hash(password, 10);
    }
    static async decryptPassword(password: string, passwordHash:string): Promise<boolean>{
        return await bcryptjs.compare(password, passwordHash);
    }

    static generateAccessToken( user : UserModel):string{
        const dateCreated = new Date();
        const dateExpired = add(dateCreated, {months: env.TOKEN.TIME_LIVE});

        const payload = {
            iat: getUnixTime(dateCreated), 
            exp: getUnixTime(dateExpired),
            name: user.name,
            lastName: user.lastname,
            roles:user.roles,
        }
        // crea ek token genera
        return jwt.encode(payload, env.TOKEN.SECRECT_WORK);
    }

    static validateAccessToken(token: string): Promise<ResponseValidateToken>{

      return new Promise((resolve, reject) => {
            try{

                // devuleve el payload, si falla va al catch 
                const payload = jwt.decode(token, env.TOKEN.SECRECT_WORK);
                resolve(payload);
            }catch(error){
                // token expired
                if(error.message.toLowerCase() === TOKEN_ERROR.TOKEN_EXPIRED){
                    reject({status:409, message:TOKEN_ERROR_MESSAGE.TOKEN_EXPIRED});
                }else{
                    reject({status:401, message:TOKEN_ERROR_MESSAGE.TOKEN_INVALID});

                }

            }
            
        })



    }

}