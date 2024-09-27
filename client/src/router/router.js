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
import Admin from "../pages/admin/Admin";
import ManagerPost from "../pages/admin/ManagerPost";
import UpdatePost from "../pages/admin/UpdatePost"
import DetailPost from "../pages/DetailPost";
import ProfileEdit from "../pages/admin/ProfileEdit";
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
        element: <ProtectRoute><Admin /></ProtectRoute>,
        children: [{ 
            path: "create-post", 
            element: <ProtectRoute><Createpost /></ProtectRoute>
        },
        {
          path: "manager-post",
          element : <ProtectRoute><ManagerPost /></ProtectRoute>
        },
        {
          path: "update-post/:postID",
          element : <ProtectRoute><UpdatePost /></ProtectRoute>
        },
        {
          path:"update-profile",
          element : <ProtectRoute><ProfileEdit/></ProtectRoute>
        }
      ],
      },
      {
        path:"detail/:postID",
        element: <DetailPost/>
      }
    ],
  },
]);
export default router;
