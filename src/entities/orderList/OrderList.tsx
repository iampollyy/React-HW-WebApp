import styles from './orderList.module.scss';
import  OrderCard  from '@entities/orderCard/OrderCard';
import  useAppSelector  from '@hooks/useAppSelector';

const OrderList: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className={styles.order__list}>
      {cart.length > 0 ? (
        cart.map((item:any) => <OrderCard key={item.Product.id} item={item} />)
      ) : (
        <p className="heading1">Your cart is empty</p>
      )}
    </div>
  );
}
export default OrderList;