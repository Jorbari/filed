import { Action } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";

export enum UserActionType {
    User = '[User] Add user information',
}

export class AddUserInformation implements Action{
    readonly type = UserActionType.User;
    constructor(public payload: UserModel){}
}

export type UserActions = | AddUserInformation
