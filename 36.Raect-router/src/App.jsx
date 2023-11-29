import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/main/pages/home/Home";
import MainLayout from "./layouts/main/MainLayout";
import About from "./layouts/main/pages/about/About";
import AuthLayout from "./layouts/auth/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "/super-admin",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <h1> super admin main  </h1>,
      },
      {
        path: "login",
        element: <h1> super admin login </h1>,
      },
      {
        path: "register",
        element: <h1> super admin register </h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
