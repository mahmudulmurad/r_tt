import { RouteObject } from "react-router-dom";
import PublicRoutes from "./Public";
import ProtectedRoute from "./Protected";
import NotFoundRoutes from "./NotFound";
import Vcard from "../vcard";
import Home from "../pages/home";
import LoginSignup from "../pages/login-signup";
import Landing from "../pages/landing/Landing.view";

const routes: RouteObject[] = [
  //public routes
  {
    path: "/",
    element: <PublicRoutes element={<Landing />} />,
  },
  {
    path: "/login-signup",
    element: <PublicRoutes element={<LoginSignup />} />,
  },

  //protected routes
  {
    path: "/home",
    element: <ProtectedRoute isAuthenticated={true} element={<Home />} />,
    caseSensitive: true,
  },
  {
    path: "/card",
    element: <ProtectedRoute isAuthenticated={true} element={<Vcard />} />,
    caseSensitive: true,
  },

  //not found routes
  { path: "*", element: <NotFoundRoutes /> },
];

export default routes;
