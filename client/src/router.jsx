import { createBrowserRouter } from "react-router-dom";
import Error from './pages/Error'
import Login from "./pages/Login";
import App from "./App";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/logout",
        element: <Logout/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default router;