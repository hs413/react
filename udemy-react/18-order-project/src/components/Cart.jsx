import Modal from "./UI/Modal.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cart.js";
import {userProgressActions} from "../store/userProgress.js";

export default function Cart() {
  const dispatch = useDispatch();
  const { progress } = useSelector(state => state.userProgress)
  const { items } = useSelector(state => state.cart)

  const cartTotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  function handleCloseCart() {
    dispatch(userProgressActions.hideCart())
  }

  function handleGoToCheckout() {
    dispatch(userProgressActions.showCheckout())
  }

  return (
      <Modal
          className="cart"
          open={progress === 'cart'}
          onClose={progress === 'cart' ? handleCloseCart : null}
      >
        <h2>Your Cart</h2>
        <ul>
          {items.map(item => (
              <li key={item.id}>
                <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onIncrease={() => dispatch(cartActions.addItem(item))}
                    onDecrease={() => dispatch(cartActions.removeItem(item.id))}
                />
              </li>
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>Close</Button>
          {items.length > 0 && (
              <Button onClick={handleGoToCheckout}>Go to checkout</Button>
          )}
        </p>
      </Modal>
  )
}