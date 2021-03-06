
import express from 'express';
import { AuthUseCase } from '../application/auth.usecase';
import UserOperation from '../../user/infraestructure/user.operation';
import AuthController from './auth.controller';
import FamilyRefreshTokensRepository from '../../family-refreshtokens/application/family-refreshtokens.repository';
import FamilyRefreshTokensOperation from 'src/family-refreshtokens/infraestructure/family-refreshtokens.infraestructure';



// aprender nest js, entender bien 


const operationUser = new UserOperation();
const operationFamilyRefreshTokens = new FamilyRefreshTokensOperation();

const useCase = new AuthUseCase(operationUser,operationFamilyRefreshTokens);

const controller = new AuthController(useCase);

const route = express.Router();

route.post("/login", controller.login.bind(controller));
route.get("/request-new-access-token/:refreshToken", controller.getNewAccessToken.bind(controller));


export default route;
