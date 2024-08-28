import { CreateAdmin } from "@/components/dashboard/CreateAdmin";
import Profile from "@/components/dashboard/Profile";
import Dashboard from "@/pages/Dashboard";

export const adminPaths = [
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
