import { LoginActionTypes } from '../types/react/actionTypes';

export const onEmailInput = (dispatch: React.Dispatch<ILoginReducerAction>, newValue: string) => {
  dispatch({ type: LoginActionTypes.EMAIL_INPUT, payload: newValue });
};
export const onUsernameInput = (dispatch: React.Dispatch<ILoginReducerAction>, newValue: string) => {
  dispatch({ type: LoginActionTypes.USERNAME_INPUT, payload: newValue });
};
export const onPasswordInput = (dispatch: React.Dispatch<ILoginReducerAction>, newValue: string) => {
  dispatch({ type: LoginActionTypes.PASSWORD_INPUT, payload: newValue });
};
