import { createBrowserRouter,Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShopAll from "./components/Categories/ShopAll";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories";
import ProductPage from "./Pages/ProductPage";

const App = ()=> {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
          path:"categories",
          element: <Categories/>,
          children:[
            {
              path:'all',
              element: <ShopAll/>,
            },
            {
              path:'back-in-stock',
              element: <ShopAll/>,
            }
          ]
      },
    {
      path:'products/:handle',
      element:<ProductPage/>
    }
    ],
  },
]);

export default router;