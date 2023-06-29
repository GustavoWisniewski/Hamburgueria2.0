import { ReactNode } from "react";

export type LoginUser = {
  email: string;
  password: string;
};
export interface UserResponse {
  id: string;
  name: string;
  email: string;
}
export interface IAuthContext {
  handleUser: (user: LoginUser | null) => void;
  userAuth: UserResponse | null;
  loading: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
export interface ILoginResponse {
  accessToken: string;
  user: UserResponse;
}
