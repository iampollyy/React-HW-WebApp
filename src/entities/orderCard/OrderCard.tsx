import ButtonPattern from '@ui/button/ButtonPattern';
import Input from '@ui/input/Input';
import styles from './orderCard.module.scss';
import useAppDispatch from '@hooks/useAppDispatch';
import { removeFromCart, updateAmount } from '@features/cart/cartSlice';

import { TCartItem } from '@types';


interface OrderCardProps {
  item: TCartItem;
}

const OrderCard: React.FC<OrderCardProps> = ({ item }) => { 
   const dispatch = useAppDispatch();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value, 10);
    if (!isNaN(newAmount) && newAmount > 0) {
      dispatch(updateAmount({ productId: item.Product.id, amount: newAmount }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.Product.id));
  };

  return(

  <div className={styles.card}>
        <div className={styles.container}>
            <div className={styles.order__details}>
                  <img src={item.Product.img} alt={item.Product.meal} className={styles.image} />
                  <div className={styles.title__price}>
                    <p className={styles.title}>{item.Product.meal}</p>
                    <p className={styles.price}>${item.Product.price} USD</p>
                  </div>
             </div>
      
            <div className={styles.order__actions}>
              <Input
              size="sm"
              type="number"
              value={item.amount}
              onChange={handleAmountChange}
              />
              <ButtonPattern
                  variant="primary"
                  size='sm'
                  className={styles.delete}
                  onClick={handleRemove}>
               X
              </ButtonPattern>
            </div>
        </div>
  </div>
      )
}

export default OrderCard;
