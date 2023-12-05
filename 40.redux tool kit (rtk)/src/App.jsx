import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./layouts/main/pages/home/Home";
import MainLayout from "./layouts/main/MainLayout";
import ProductDetail from "./layouts/main/pages/detail-page/ProductDetail";
import { BasketProvider } from "./contexts/BasketContext";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { AuthProvider } from "./contexts/authContext";
import CounterApp from "./CounterApp";
import { Provider } from "react-redux";
import { store } from "./RTK/store";
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
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
