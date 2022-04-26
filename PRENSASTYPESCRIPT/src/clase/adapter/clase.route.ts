
import express from 'express';
import ClaseOperation from '../infraestructure/clase.operation';
import ClaseUseCase from '../application/clase.usecase';
import ClaseController from './clase.controller';

const operations = new ClaseOperation();

const useCase = new ClaseUseCase(operations);

const controller = new ClaseController(useCase);

const routeClase = express.Router();

routeClase.get("/", controller.list.bind(controller));
routeClase.get("/page/:page", controller.getPage.bind(controller));
routeClase.get("/getFilter", controller.getFilter.bind(controller));
routeClase.get("/:id", controller.getOne.bind(controller));
routeClase.post("/", controller.insert.bind(controller));
routeClase.put("/:id", controller.update.bind(controller));
routeClase.delete("/:id", controller.delete.bind(controller));

export default routeClase;