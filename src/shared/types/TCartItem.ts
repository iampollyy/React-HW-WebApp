import { TProduct } from "./TProduct";

export type TCartItem = {
  Product: Omit<
    TProduct,
    "category" | "description" | "rating" | "area" | "instructions"
  >;
  amount: number;
};
