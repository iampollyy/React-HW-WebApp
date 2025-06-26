import React, { useState, useEffect, ChangeEvent} from 'react';
import  ButtonPattern  from '@ui/button/ButtonPattern';
import  Input  from '@ui/input/Input';
import styles from './productCard.module.scss';

import { TProduct } from "@types"
import  useAppDispatch  from '@hooks/useAppDispatch';
import { addToCart } from '@features/cart/cartSlice';


interface ProductCardProps {
  item: TProduct;
}
 const ProductCard : React.FC<ProductCardProps> = ({ item }) => {

   const dispatch = useAppDispatch()
     const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(0);
  }, [item.id]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(value >= 0 ? value : 0);
  };

  const handleAddToCart = () => {
    if (amount > 0) {
      dispatch(addToCart({product: item, amount }));
      setAmount(0);
    }
  };

  return (
      <div className={styles.card}>
        <div className={styles.container}>
          <img src={item.img} alt={item.meal} className={styles.image} />
          <div className={styles.aboutBurger}>
            <div className={styles.title__price}>
              <p className={styles.title}>{item.meal}</p>
              <p className={styles.price}>${item.price} USD</p>
            </div>
            <p className={styles.description}>
              {item.instructions.slice(0, 120)}
            </p>
            <form className={styles.add_to_cart__actions}>
              <Input
                  size="md"
                  type="number"
                  value={amount}
                  onChange={handleChange}
              />
              <ButtonPattern
                  variant="primary"
                  size="md"
                  className={styles.add_to_cart}
                  onClick ={handleAddToCart}
              >
                Add to cart
              </ButtonPattern>
            </form>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;


