import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./layouts/main/pages/home/Home";
import MainLayout from "./layouts/main/MainLayout";
import ProductDetail from "./layouts/main/pages/detail-page/ProductDetail";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Register from "./layouts/auth/pages/Register";
import { useContext, useEffect } from "react";
import { ProfileCall } from "./services/auth";
import { AuthContext } from "./contexts/authContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export const MainRouter = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    ProfileCall()
      .then(({ data }) => {
        setUser(data.client);
      })
      .catch((err) => {
        setUser(false);
        console.log(err);
      });
  }, []);
  return <RouterProvider router={router} />;
};
