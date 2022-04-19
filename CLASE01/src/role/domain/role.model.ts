type ACTION_USER = "LIST_USER" | "GET_USER" | "INSERT_USER" | "UPDATE_USER" | "DELETE_USER";
type ACTION_MEDIC = "LIST_MEDIC" | "GET_MEDIC" | "INSERT_MEDIC" | "UPDATE_MEDIC" | "DELETE_MEDIC";

type ACTION = ACTION_USER & ACTION_MEDIC;

export interface RoleModel {
    name: string;
    actions: ACTION[];
   
   
}