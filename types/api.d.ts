
interface LoginResponse extends BaseResponse {
  data: {
    user: FourZIdentityResponse;
    token: string;
    refreshToken: string;
  };
}
interface LoginV2Response extends BaseResponse {
  data: {
    app: IApp;
    facility: IFacility;
    user: FourZIdentityResponse;
    token: string;
    refreshToken: string;
  };
}
interface RefreshTokenResponse extends BaseResponse {
  data: {
    token: string;
    refreshToken: string;
  };
}
interface AppConfigResponse extends BaseResponse {
  config: IAppConfig;
}
