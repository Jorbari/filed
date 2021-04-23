import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { UserActions, UserActionType } from '../actions/user_data.action';

export interface userState {
  users: UserModel[];
}
const initialState: userState = {
  users: [],
};
const getUsersFeatureState = createFeatureSelector<userState>('users');
export const getUsers = createSelector(
  getUsersFeatureState,
  (state) => state.users
);

export function userReducer(
  state = initialState,
  action: UserActions
): userState {
  switch (action.type) {
    case UserActionType.User:
      let users = [...state.users, action.payload];
      return {
        ...state,
        users,
      };
    default:
      return state;
  }
}
