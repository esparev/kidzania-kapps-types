import { LoginActionTypes } from '../types/react/actionTypes';

export const reducerObject = <T>(state: T, payload: ILoginReducerAction['payload']) => ({
  [LoginActionTypes.EMAIL_INPUT]: {
    ...state,
    email: payload,
  },
  [LoginActionTypes.USERNAME_INPUT]: {
    ...state,
    username: payload,
  },
  [LoginActionTypes.PASSWORD_INPUT]: {
    ...state,
    password: payload,
  },
});

export const reducer = (state: IUserState, action: ILoginReducerAction): IUserState => {
  return reducerObject(state, action.payload)[action.type] || state;
};
