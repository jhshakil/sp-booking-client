import Profile from "@/components/dashboard/Profile";
import Dashboard from "@/pages/Dashboard";

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
