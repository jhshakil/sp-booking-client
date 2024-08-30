import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";

export const userPaths = [
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
    name: "My Booking",
    path: "booking",
    element: <Dashboard />,
  },
];
