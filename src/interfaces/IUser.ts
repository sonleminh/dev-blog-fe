export interface IUser {
  // _id?: string;
  name: string | null;
}

export interface ISignInResponse {
  id: string;
  // name: string | null;
  // accessToken: string;
  // refreshToken: string;
  message: string;
  user?: {
    id: string;
    name: string | null;
    accessToken?: string;
    refreshToken?: string;
  };
  error?: string;
  statusCode?: number;
}
