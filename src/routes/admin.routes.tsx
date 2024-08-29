import { CreateAdmin } from "@/components/dashboard/CreateAdmin";
import FacilityControl from "@/components/dashboard/FacilityControl";
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
