import express from 'express';


/* import Controller from '@driver/adapter/driver.controller';

import { DriverOperation } from '@driver/infraestructure/driver.operation';
import { DriverUseCase } from '@driver/application/driver.usecase';



const driverOperation = new DriverOperation();
const driverUseCase = new DriverUseCase(driverOperation); */

const route = express.Router();
// const controller = new Controller(driverUseCase);

/* route.get("/", controller.list.bind(controller));// inserta el contexto
route.get("/:id",controller.getOne); // el valor de los parametros lo manda get o post
route.post("/",controller.insert);
route.put("/:id",controller.update);
route.delete("/",controller.delete); */

export default route;