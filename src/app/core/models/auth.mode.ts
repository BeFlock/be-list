export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IRegisterResponse {
  message: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  message: string;
  user: IUser;
}
