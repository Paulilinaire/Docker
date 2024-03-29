import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./components/product/ProductList";
import CreateProduct from "./components/product/CreateProduct";



const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children: [
            {
                path: "/products",
                element: <ProductList />
            },
            {
                path: "/create-product",
                element:<CreateProduct />
            }

        ]
    }
])

export default router