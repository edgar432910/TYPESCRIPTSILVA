import { NextFunction, Request, Response } from "express";

export class AuthorizationGuard{
    // retorna un middleware
    static canActivate(...actionsAllowed : string[]){
        return (req:Request, res:Response, next:NextFunction) =>{
            const {roles} = res.locals.payload;
          const listActions:string[] = roles.map((role:any) => // [{actions:"User_list"}, {actions:"User"}]
                role.actions
            ).reduce((accum:any, actions: string) => {
                
               accum+=actions.trim(); // accum = "", accum = [User_list]
                return accum;
            }, "")
            .split(",");

            const listActionsUnique= [...new Set(listActions)]; // devuelve valores unicos
            // sprit clone, rest juntar

           

            const matched = actionsAllowed.some( (action:string) =>
                listActionsUnique.includes(action) );

            if(matched){
                next();
            } else{
                res.status(403).send("Forbidden");
            }
            
            // let actionMatched = false;

            // for(const action of actionsAllowed){
            //     if(listActionsUnique.includes(action)){
            //         actionMatched = true;
            //         break;
            //     }
            // }

        }
    }
}