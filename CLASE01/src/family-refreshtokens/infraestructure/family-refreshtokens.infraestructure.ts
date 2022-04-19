
import BaseOperation from "@shared/infraestructure/base.operation";

import { FamilyRefreshTokensModel } from '../domain/family-refreshtokens.model';
import FamilyRefreshTokensRepository from '../application/family-refreshtokens.repository';
import { FamilyRefreshTokens } from '../../entities/family-refresh-tokens.entity';

export default class FamilyRefreshTokensOperation extends BaseOperation<FamilyRefreshTokensModel> implements FamilyRefreshTokensRepository{
    constructor(){
        super(FamilyRefreshTokens);
    }
    
}