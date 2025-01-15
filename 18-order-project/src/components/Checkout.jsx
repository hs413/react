import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Input from "./Input.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
      (acc, item) => acc + item.quantity * item.price, 0
  )

  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  return (
      <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>

        <form>
          <h2>Checkout</h2>
          <p>Total: {currencyFormatter.format(cartTotal)}</p>

          <Input label="full name" type="text" id="full-name"/>
          <Input label="Email" type="email" id="email"/>
          <Input label="Street" type="text" id="street"/>
          <div className="control-row">
            <Input label="Postal" type="text" id="postal-code"/>
            <Input label="City" type="text" id="city"/>
          </div>

          <p className="modal-actions">
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Submit</Button>
          </p>

        </form>
      </Modal>
  )
}