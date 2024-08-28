import { ReactNode } from "react";

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
      path: string;
      label: ReactNode;
    }
  | undefined;
