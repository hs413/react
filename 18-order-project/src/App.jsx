import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import {Provider} from "react-redux";
import store from "./store/index.js";

function App() {
  return (
      <Provider store={store}>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </Provider>
  )
}

export default App;
