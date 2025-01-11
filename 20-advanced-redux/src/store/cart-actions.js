import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

const url = '';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
          url
      )

      if(!response.ok) {
        throw new Error('Could not fetch cart Data');
      }

      const data = await response.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData))
    } catch(e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed',
      }))
    }

  }
}


export const sendCartData = (cart) =>  {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending..',
      message: 'Sending cart data',
    }))

    const sendRequest = async () => {
      const response = await fetch(
          url,
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }
    }

    try {
      const response = await sendRequest();

      // const responseData = await response.json();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'sending cart data Success',
      }))
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed',
      }))
    }
  }
}