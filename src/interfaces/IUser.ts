export interface IUser {
  name: string | null;
}

export interface ISignInResponse {
  // name: string | null;
  // accessToken: string;
  // refreshToken: string;
  message: string;
  user?: {
    id: string;
    name: string | null;
    accessToken: string;
    refreshToken: string;
  };
  error?: string;
  statusCode?: number;
}

export interface IWhoIAmResponse {
  id_user: string;
  name: string;
  exp: number;
  iat: number;
}
