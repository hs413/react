import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {userProgressActions} from "../store/userProgress.js";
export default function Header() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalCartItems = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
  function handleShowCart() {
    dispatch(userProgressActions.showCart())
  }

  return (
      <header id="main-header">
        <div id="title">
          <img src={logoImg}/>
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
      </header>
  )
}