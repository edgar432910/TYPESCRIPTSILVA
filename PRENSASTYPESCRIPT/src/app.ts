
import express, { Application } from 'express';
import routeClase from './clase/adapter/clase.route';
import routeFamilia from './familia/adapter/familia.route';



 class App {
    expressApp:Application;
    
    constructor() {
        this.expressApp= express();
        this.mountMiddlewares();
        this.mountRoutes();
        this.mountErrors();
    }

    init(){
        
    }

  
    mountRoutes(){
      
      
       
        this.expressApp.use("/familia", routeFamilia);
        this.expressApp.use("/clase", routeClase);

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
      
        this.expressApp.use("**",(request, response) =>{
           
            response.writeHead(200, {"content-type": "text/plain"})
            response.write("Err")
            response.end()
        } )
        
    };
    
}

export default new App().expressApp;


/* const server= http.createServer((request, response) =>{
    console.log(request.url);
    response.writeHead(200, {"content-type": "text/plain"})
    response.write("Hola")
    response.end()
}) */
