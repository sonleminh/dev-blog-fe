export interface IUser {
  // _id?: string;
  name: string | null;
}

export interface ISignInResponse {
  id: string;
  name: string | null;
  accessToken: string;
  refreshToken: string;
}

export interface ISignInFailed {
  message: string;
  error: string;
  statusCode: number;
}
