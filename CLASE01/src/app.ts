
import express, { Application } from 'express';
import routeUser from '@user/adapter/user.route';
import  routeDriver  from '@driver/adapter/driver.route';
import routeMedic from '@medic/adapter/medic.route'
import routeRole from '@role/adapter/role.route'
import routeAuth from '@auth/adapter/auth.route'
import errorHelper from "@shared/helpers/errors.helps"
import multer from "multer";
import { AuthenticationGuard } from './shared/application/guards/authentication.guard';
import { AuthorizationGuard } from './shared/application/guards/authorization.guard';

 class App {
    expressApp:Application;
    constructor() {
        this.expressApp= express();
        this.mountMiddlewares();
        this.mountRoutes();
        this.mountErrors();
    }

    init(){
        multer();
        
    }

  
    mountRoutes(){
       this.expressApp.use("/users", routeUser);
        this.expressApp.use("/drivers",AuthenticationGuard.canActive, AuthorizationGuard.canActivate("MEDICS_INSERT"), routeDriver);
        this.expressApp.use("/medics",AuthenticationGuard.canActive, AuthorizationGuard.canActivate("MEDICS_INSERT"), routeMedic);
        this.expressApp.use("/roles", routeRole);
        this.expressApp.use("/auth", routeAuth);
      
       

        this.expressApp.get("/",(request, response) =>{
           
            response.writeHead(200, {"content-type": "text/plain"})
            response.write("Hola")
            response.end()
        } )
        
        // cualquier metodo, y ruta
        
      
    }
    mountMiddlewares(){
        this.expressApp.use(express.urlencoded({ extended:true })); // req.body
        this.expressApp.use(express.json()); // req.body
    }

    mountErrors(){
        this.expressApp.use("**",errorHelper.notFound );
        this.expressApp.use(errorHelper.generic );
    };
    
}

export default new App().expressApp;


/* const server= http.createServer((request, response) =>{
    console.log(request.url);
    response.writeHead(200, {"content-type": "text/plain"})
    response.write("Hola")
    response.end()
}) */
