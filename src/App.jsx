import { createBrowserRouter,Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShopAll from "./components/Categories/ShopAll";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories";
import ProductPage from "./Pages/ProductPage";
import Bedroom from "./components/Categories/Bedroom";
import Bathroom from "./components/Categories/Bathroom";
import Sale from "./components/Categories/Sale";
import Gifting from "./components/Categories/Gifting";
import OfficePaper from "./components/Categories/OfficePaper";
import BabyChild from "./components/Categories/BabyChild";
import Apparel from "./components/Categories/Apparel";
import Outdoors from "./components/Categories/Outdoors";
import KitchenTable from "./components/Categories/KitchenTable";
import HouseKeeping from "./components/Categories/HouseKeeping";
import Living from "./components/Categories/Living";
import AboutUs from "./Pages/AboutUs";
import BackInStock from "./components/Categories/BackInStock";
import New from "./components/Categories/New";
import SearchResults from "./components/SearchResults";
import TheJournal from "./Pages/TheJournal";

const App = ()=> {
  return (
    < >
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
              path:'new',
              element: <New/>,
            },
            {
              path:'back-in-stock',
              element: <BackInStock/>,
            },
            {
              path:'bedroom',
              element: <Bedroom/>,
            },
            {
              path:'bathroom',
              element: <Bathroom/>,
            },
            {
              path:'houseKeeping',
              element: <HouseKeeping/>,
            },
            {
              path:'kitchen-table',
              element: <KitchenTable/>,
            },
            {
              path:'living',
              element: <Living/>,
            },
            {
              path:'outdoors',
              element: <Outdoors/>,
            },
            {
              path:'apparel',
              element: <Apparel/>,
            },
            {
              path:'baby-child',
              element: <BabyChild/>,
            },
            {
              path:'office-paper',
              element: <OfficePaper/>,
            },
            {
              path:'gifting',
              element: <Gifting/>,
            },
            {
              path:'sale',
              element: <Sale/>,
            },
          ]
      },
    {
      path:'products/:handle',
      element:<ProductPage/>
    },
    {
      path:'pages/about-us',
      element:<AboutUs/>
    },
    {
      path:'pages/the-journal',
      element:<TheJournal/>
    },
    {
      path:'search-results',
      element:<SearchResults/>
    },
  
    ],
  },
]);

export default router;