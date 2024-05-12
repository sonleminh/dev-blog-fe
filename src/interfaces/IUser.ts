export interface IUser {
  // _id?: string;
  name: string | null;
}

export interface ISignInResponse {
  name: string | null;
  accessToken: string;
  refreshToken: string;
}
