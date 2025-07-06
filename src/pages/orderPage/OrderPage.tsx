import { OrderForm } from '@ui';
import styles from './order.module.scss';
import { OrderList } from '@entities';

const OrderPage = () => {
  return (
    <section className={styles.orderPage__section}>
      <div className={styles.orderPage__wrapper}>
        <h1 className="heading1">Finish your order</h1>
        <OrderList />
        <OrderForm/>
      </div>
      </section>
  )
 }

export default OrderPage;