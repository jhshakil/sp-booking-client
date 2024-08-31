import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { routeGenerator } from "@/lib/utils";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import FacilityPage from "@/pages/FacilityPage";
import Login from "@/components/Login";
import Registration from "@/components/Registration";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/facility",
        element: <FacilityPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
]);

export default routes;
