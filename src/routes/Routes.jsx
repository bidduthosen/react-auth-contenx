import {
    createBrowserRouter
} from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Dashbord from "../components/Dashbord";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path:'/',
                element: <h1>Home</h1>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashbord',
                element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
            }
        ]
    },
]);



export default router