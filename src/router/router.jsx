import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "/shop",
                Component: Shop,
            },
            {
                path: "/products/:id",
                Component: ProductDetails,
            },

            
        ]
    },
]);