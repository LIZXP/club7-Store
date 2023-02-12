import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemToCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import "./checkout-item.style.scss";
import { selectCartItems } from "../../store/cart/cart.selector";
function CheckoutItem({ cartItem }) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHander = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHander = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHander}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHander}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
