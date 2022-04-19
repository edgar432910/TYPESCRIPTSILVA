import { NextFunction, Request, Response } from "express";
export interface IError extends Error{
    status?: number;
    code?: string;
}

export default class {

    static notFound(req: Request, res: Response, next: NextFunction):void{

        const error:IError = new Error("Path not found");
        error.status = 404;

        // res.status(404).send("path Not found ");
        // next(new Error("Path Not Found"));
        next(error);
    }

    static generic(error:IError, req: Request, res: Response, next: NextFunction){

        const objError: IError = {
            name:error.name,
            status:error.status? error.status:500,
            message:error.message
        }
        console.log("generic")
        console.log({objError});

        if(process.env.NODE_ENV!=="production"){
            objError.stack = error.stack;
        }

        res.status(error.status? error.status:500).json(objError);
    }

    static  catchError(
        ftn: (req:Request, res:Response, next:NextFunction)=> Promise<any>
    ){
        return (req:Request, res:Response, next:NextFunction) =>{
          return  ftn(req, res, next).catch((err) =>{

           
              let error:IError ;

              console.log({err})

               
                    error = new Error("error");
                    error.name = err.status?"Async error":"DATABASE ERROR";
                    error.message = err.message;
                    error.stack = err.message;
                    error.status = err.status?err.status:503;
                
            
              next(error);
          });
        };
    }
  
}