import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RequestForgetPassword from "../pages/RequestForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import SinglePage from "../pages/SinglePage";
import Createpost from "../pages/admin/Createpost";
import ProtectRoute from "../middleware/ProtectRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SinglePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "request-forget-password",
        element: <RequestForgetPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: ":slug",
        element: <SinglePage />,
      },
      {
        path: "admin",
        children: [{ 
            path: "create-post", 
            element: <Createpost />
        }],
      },
    ],
  },
]);
export default router;
