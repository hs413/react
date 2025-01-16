import Modal from "./UI/Modal.jsx";
import {currencyFormatter} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import Input from "./Input.jsx";
import {useDispatch, useSelector} from "react-redux";
import {userProgressActions} from "../store/userProgress.js";

export default function Checkout() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart)
  const { progress } = useSelector(state => state.userProgress)

  const cartTotal = items.reduce(
      (acc, item) => acc + item.quantity * item.price, 0
  )

  function handleClose() {
    dispatch(userProgressActions.hideCheckout())
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        }
      })
    })
  }

  return (
      <Modal open={progress === 'checkout'} onClose={handleClose}>

        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total: {currencyFormatter.format(cartTotal)}</p>

          <Input label="full name" type="text" id="name"/>
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