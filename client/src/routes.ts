import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { ADMIN__ROUTE, BASKET__ROUTE, DEVICE__ROUTE, LOGIN__ROUTE, REGISTRATION__ROUTE, SHOP__ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN__ROUTE,
        Component: Admin
    },

    {
        path:BASKET__ROUTE,
        Component:Basket
    }
    
]
export const publicRoutes = [
    {
        path:LOGIN__ROUTE,
        Component:Auth
    },
    {
        path:SHOP__ROUTE,
        Component:Shop
    },
    {
        path:DEVICE__ROUTE+'/:id',
        Component:DevicePage
    },
    {
        path:REGISTRATION__ROUTE,
        Component:Auth
    },
]