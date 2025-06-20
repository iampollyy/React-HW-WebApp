import { HomePage, LoginPage, MenuPage, NotFoundPage, OrderPage } from "@pages";
import { JSX } from "react";

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