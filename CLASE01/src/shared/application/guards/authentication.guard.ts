import { ErrorResponse } from "@shared/interface/error-response.interface";
import { IPayload } from "@shared/interface/payload.interface";
import { NextFunction, Request, Response } from "express";
import { UserService } from '../../../user/application/user.service';

export class AuthenticationGuard{

    static canActive(req:Request, res: Response, next:NextFunction){
        // return res.status(401).send("Unauthorized");
        const headers = req.headers;
        const authorizationHeader =headers["authorization"]; 
        if(!authorizationHeader){
            return  res.status(401).send("Unauthorized");
        }
        const parts = authorizationHeader.split(" ");
        if(!(parts.length>1 && parts[0].toLocaleLowerCase() === "bearer")){
            return  res.status(401).send("Unauthorized");
        }
        
        UserService.validateAccessToken(parts[1]).then((payload: IPayload) =>{
            res.locals.payload = payload;
            next();
        },(error:ErrorResponse)=>{ 
            res.status(error.status).send(error.message);
        })
       

    }

}