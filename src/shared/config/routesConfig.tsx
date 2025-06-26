import { JSX } from "react";
import HomePage from "@pages/homePage/HomePage";
import MenuPage from "@pages/menuPage/MenuPage";
import NotFoundPage from "@pages/notFoundPage/NotFoundPage";
import OrderPage from "@pages/orderPage/OrderPage";
import LoginPage from "@pages/loginPage/LoginPage";

interface IRoute{
  path: string;
  element: JSX.Element;
  isPrivate: boolean;
}

 const routes: IRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    path: "/menu",
    element: <MenuPage />,
    isPrivate: true,
  },
   {
    path: "/order",
    element: <OrderPage />,
    isPrivate: true,
   },
  
  {
     path: "*",
    element: <NotFoundPage />,
    isPrivate: false,
     
   }
];

export default  routes ;
export type { IRoute };