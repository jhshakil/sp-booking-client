import { ReactNode } from "react";

export type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUserData = {
  _id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
  address: string;
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
};

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
    }
  | undefined;
