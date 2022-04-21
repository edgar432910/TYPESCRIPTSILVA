import FamiliaUseCase from "../application/familia.usecase";
import FamiliaOperation from "../infraestructure/familia.operation";
import FamiliaController from "./familia.controller";
import express from 'express';

const operations = new FamiliaOperation();

const useCase = new FamiliaUseCase(operations);

const controller = new FamiliaController(useCase);

const routeFamilia = express.Router();

routeFamilia.get("/", controller.list.bind(controller));
routeFamilia.get("/page/:page", controller.getPage.bind(controller));
routeFamilia.get("/:id", controller.getOne.bind(controller));
routeFamilia.post("/", controller.insert.bind(controller));
routeFamilia.put("/:id", controller.update.bind(controller));
routeFamilia.delete("/:id", controller.delete.bind(controller));

export default routeFamilia;