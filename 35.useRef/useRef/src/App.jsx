import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/main/pages/home/Home";
import MainLayout from "./layouts/main/MainLayout";
import ProductDetail from "./layouts/main/pages/detail-page/ProductDetail";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
