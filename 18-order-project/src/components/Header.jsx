import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
  return (
      <header id="main-header">
        <div id="title">
          <img src={logoImg}/>
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button>Cart ({totalCartItems})</Button>
        </nav>
      </header>
  )
}