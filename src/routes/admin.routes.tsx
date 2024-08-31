import ALlBookingAdmin from "@/pages/AllBookingAdmin";
import CreateAdmin from "@/pages/CreateAdmin";
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
    name: "Booking",
    path: "all-booking",
    element: <ALlBookingAdmin />,
  },
  {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
  },
];
