import styles from './orderList.module.scss';
import { OrderCard } from '@entities';
import { useAppSelector } from '@hooks';

const OrderList: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={styles.order__list}>
      {cart.length > 0 ? (
        cart.map((item) => <OrderCard key={item.Product.id} item={item} />)
      ) : (
        <p className="heading1">Your cart is empty</p>
      )}
    </div>
  );
}
export default OrderList;