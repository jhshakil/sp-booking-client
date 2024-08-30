import { CreateAdmin } from "@/components/dashboard/CreateAdmin";
import FacilityControl from "@/components/dashboard/FacilityControl";
import Profile from "@/components/dashboard/Profile";
import UserControl from "@/components/dashboard/UserControl";
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
    name: "User",
    path: "user",
    element: <UserControl />,
  },
  {
    name: "Facility",
    path: "facility",
    element: <FacilityControl />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
