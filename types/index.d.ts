interface BaseResponse {
  success: boolean;
}
interface IAuthToken {
  user: string;
  username: string;
  role: string;
  fourzToken: string;
  facilityId?: string;
  iat: number;
  exp?: number;
}
interface IFacility {
  id_facility: string;
  name: string;
}
interface IApp {
  id: string;
  name: string;
  description: string;
}
interface IAppConfig {
  pin: string;
}
interface IUser {
  readonly email: string;
  readonly username: string;
  readonly password: string;
}
type TRoles = 'facility' | 'franchise';
