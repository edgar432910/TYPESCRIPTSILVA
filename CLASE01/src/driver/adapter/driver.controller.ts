/* import UserUseCase from "@user/application/user.usecase";
import UserOperation from "@user/infraestructure/user.operation";
import { DriverUseCase } from '@driver/application/driver.usecase';
import { DriverModel } from '@driver/domain/driver.model';



export default class {

   constructor(private driverUseCase:DriverUseCase){}

    list(request:any, response:any) {
      
        response.status(200).json(this.driverUseCase.list())
      
    }

    getOne(request:any, response:any) {
        const id  = +request.params.id; // parseInt
      
       response.json(this.driverUseCase.getOne(id));
    }

    insert(request:any, response:any) {
        const body = request.body;
        response.status(200).json(this.driverUseCase.insert(body));
    } 
    update(request:any, response:any) {
        const id = +request.params.id;
        const body = request.body;
        response.json(this.driverUseCase.update(id, body));
    }
    delete(request:any, response:any) {
      const id = +request.params.id;
      response.json(this.driverUseCase.delete(id));
    }


} */