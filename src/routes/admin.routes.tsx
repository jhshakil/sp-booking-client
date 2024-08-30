import CreateAdmin from "@/pages/CreateAdmin";
import Dashboard from "@/pages/Dashboard";
import FacilityControl from "@/pages/FacilityControl";
import Profile from "@/pages/Profile";
import UserControl from "@/pages/UserControl";

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
