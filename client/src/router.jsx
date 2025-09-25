import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clean } from "./store/auth.slice";
const base_url = import.meta.env.VITE_API_URL;

import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import axios from "axios";
import UserProfile from "./pages/UserProfile";
import MyPosts from "./pages/MyPosts";
import BlogDetails from "./pages/BlogDetails";
import AddPost from "./pages/AddPost";

// Component to check auth and redirect
function AuthChecker() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        if (!token || !userId) {
            dispatch(clean());
            navigate("/login", { replace: true });
        }
        else if (token && userId && (location.pathname === "/login" || location.pathname === "/register")) {
            navigate("/dashboard", { replace: true });
        }
    }, []);

    return null;
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthChecker />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={<App />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="myposts" element={<MyPosts />} />
                    <Route path="addpost" element={<AddPost />} />
                    <Route path="post/:title" element={<BlogDetails />} />
                    <Route path="profile" element={<UserProfile />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
// export default function AppRouter() {
//     return (
//         <BrowserRouter>
//             <AuthChecker />
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/logout" element={<Logout />} />
//                 <Route path="/" element={<App />}>
//                     <Route path="dashboard" element={<Dashboard />} />
//                 </Route>
//                 <Route path="*" element={<Error />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }



