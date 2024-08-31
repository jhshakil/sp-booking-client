import AllBooking from "@/pages/AllBooking";
import CreateBooking from "@/pages/CreateBooking";
import Profile from "@/pages/Profile";

export const userPaths = [
  {
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },

  {
    name: "Booking Slot",
    path: "create-booking",
    element: <CreateBooking />,
  },
  {
    name: "All Booking",
    path: "all-booking",
    element: <AllBooking />,
  },
];
