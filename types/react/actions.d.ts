enum LoginActionTypes {
  EMAIL_INPUT = 'EMAIL_INPUT',
  USERNAME_INPUT = 'USERNAME_INPUT',
  PASSWORD_INPUT = 'PASSWORD_INPUT',
}
interface ILoginReducerAction {
  type: LoginActionTypes;
  payload?: string;
}
