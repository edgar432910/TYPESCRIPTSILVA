import { Request, Response } from 'express';



import { AuthUseCase } from '../application/auth.usecase';
import { UserModel } from '../../user/domain/user.model';
import { TokensModel } from '../domain/tokens.model';
import Result from '../../shared/application/result.interface';
export default class AuthController{

    constructor(private useCase:AuthUseCase){

    }


    async login( req:Request, res:Response){

        const user:Partial<UserModel> = { email:req.body.email, password:req.body.password }
        

        const results = await this.useCase.login(user)

        res.json(results);
    }

    async getNewAccessToken(req:Request, res:Response){
       

        const {refreshToken} = req.params; 

        const result: Result<TokensModel> = await this.useCase.getNewAccessToken(refreshToken);
        if(result){
            return res.json(result);
        }

        return res.status(404).send("User Not found");

    }

    
  
}