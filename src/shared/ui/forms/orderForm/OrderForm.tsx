import styles from "./orderForm.module.scss";
import  Input  from "@ui/input/Input";
import  ButtonPattern  from "@ui/button/ButtonPattern";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import useInput from "@hooks/useInput"; 
import useValidation from "@hooks/useValidation";
import { clearCart } from "@features/cart/cartSlice";

const OrderForm = () => {
  const street = useInput("");
  const streetValidation = useValidation(street.value, { isEmpty: true });

  const house = useInput("");
  const houseValidation = useValidation(house.value, { isEmpty: true });

  const user = useAppSelector((state) => state.auth.user);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    street.onBlur();
    house.onBlur();

    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    if (!streetValidation.isValid || !houseValidation.isValid) {
      return;
    }

    try {
      const response = await fetch(
        "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.uid,
            email: user.email,
            street: street.value,
            house: house.value,
            cart: cart.map((item) => ({
              productId: item.Product.id,
              amount: item.amount,
            })),
            totalPrice: cart.reduce(
              (total, item) => total + item.Product.price * item.amount,
              0
            ),
            createdAt: new Date().toISOString(),
          }),
        }
      );

       if (!response.ok) throw new Error("Failed to place order");
      
      dispatch(clearCart())
      alert(`Order placed for ${street.value}, house ${house.value}`);
      street.reset();
      house.reset();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <form className={styles.order__container} onSubmit={handleSubmit} noValidate>
      <div className={styles.input__container}>
        <div className={styles.row__container}>
          <div className={styles.row}>
            <label className={styles.label__wrapper}>
              Street
              <Input
                type="text"
                name="street"
                size="lg"
                required
                value={street.value}
                onChange={street.onChange}
                onBlur={street.onBlur}
                placeholder="Enter your street"

              />
            </label>
            {street.isDirty && streetValidation.isEmpty && (
              <span className={styles.error}>Street cannot be empty</span>
            )}
          </div>

          <div className={styles.row}>
            <label className={styles.label__wrapper}>
              House
              <Input
                type="text"
                name="house"
                size="lg"
                required
                value={house.value}
                onChange={house.onChange}
                onBlur={house.onBlur}
                placeholder="Enter your house number"
              />
            </label>
            {house.isDirty && houseValidation.isEmpty && (
              <span className={styles.error}>House cannot be empty</span>
            )}
          </div>
        </div>

        <div className={styles.btn__container}>
          <ButtonPattern type="submit" size="lg">
            Order
          </ButtonPattern>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
