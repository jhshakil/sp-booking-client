import { verifyToken } from "@/lib/verifyToken";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role?: string | undefined;
};

const ProtectedRoute = ({ children, role = "user" }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const mainUser = JSON.parse(JSON.stringify(user));
  console.log(mainUser);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
