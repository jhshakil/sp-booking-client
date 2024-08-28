import { sidebarItemsGenerator } from "@/lib/sidebarNavGenerator";
import { verifyToken } from "@/lib/verifyToken";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { userPaths } from "@/routes/user.routes";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";

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
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case "user":
      sidebarItems = sidebarItemsGenerator(userPaths, "user");
      break;

    default:
      break;
  }
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-2 px-2">
        {sidebarItems?.map((link) => (
          <Button
            variant={currentPath === link?.path ? "default" : "secondary"}
            key={link?.key}
          >
            {link?.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
