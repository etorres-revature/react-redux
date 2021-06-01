import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fectch("URLGoesHere");

      if (!response.ok) {
        throw new Error("Cart Data not fetched for some reason....");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching Cart Data failed.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending....",
        message: "Sending Cart Data Now.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("urlGoesHere...", {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Cart Data sent successfully.",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Cart Data failed to send.",
        })
      );
    }
  };
};
