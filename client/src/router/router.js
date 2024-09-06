import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RequestForgetPassword from "../pages/RequestForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import SinglePage from "../pages/SinglePage";
const router = createBrowserRouter([
    { 
        path: "/",
        element: <App />,
        children: [
            { 
                path:"/",
                element: <Home />
            },
            {
                path:"login",
                element: <Login />
            },
            {
                path:"signup",
                element: <SignUp/>
            },
            {
                path:"request-forget-password",
                element: <RequestForgetPassword />
            },
            {
                path:"reset-password/:token",
                element: <ResetPassword />
            },
            {
                path:":slug",
                element: <SinglePage/>
            }
            
        ]
    }
])
export default router;