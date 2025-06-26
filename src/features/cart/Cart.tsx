import  ButtonPattern from '@ui/button/ButtonPattern';
import Cart_img from '@images/icons/cart.svg';
import styles from './cart.module.scss';
import  useAppSelector  from '@hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const cartCount = cart.reduce((acc:any, item: any) => acc + item.amount, 0);
  const user = useAppSelector((state) => state.auth.user)
  const navigate = useNavigate();
     
  const handleCartClick = () => {
      if (user) {
          navigate("/order");
      } 
  };

  return (
    <ButtonPattern
      type="button"
      variant="primary"
      size="sm"
      className={styles.cart}
      onClick={handleCartClick}
    >
      <img src={Cart_img} alt="cart" />
      {cartCount > 0 && (
        <div className={styles.counter}>
          <p className={styles.counter__value}>{cartCount}</p>
        </div>
      )}
    </ButtonPattern>
  );
};

export default Cart;
