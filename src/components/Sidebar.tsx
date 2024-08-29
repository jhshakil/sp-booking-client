import { sidebarItemsGenerator } from "@/lib/sidebarNavGenerator";
import { verifyToken } from "@/lib/verifyToken";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { userPaths } from "@/routes/user.routes";
import { useLocation } from "react-router-dom";
import { TUser } from "@/types/user.types";
import React from "react";

const Sidebar = () => {
  const location = useLocation();
  const rootPath = location.pathname.split("/");
  const currentPath = rootPath[rootPath.length - 1];

  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case "admin":
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin", currentPath);
      break;
    case "user":
      sidebarItems = sidebarItemsGenerator(userPaths, "user", currentPath);
      break;

    default:
      break;
  }
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-2 px-2">
        {sidebarItems?.map((link) => (
          <React.Fragment key={link?.key}>{link?.label}</React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
