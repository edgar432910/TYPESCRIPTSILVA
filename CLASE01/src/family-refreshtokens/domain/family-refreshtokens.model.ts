import { UserModel } from "@user/domain/user.model";

export interface FamilyRefreshTokensModel{
    id?:number;
    refreshToken:string;
    user?:UserModel;
    status?:boolean;
}