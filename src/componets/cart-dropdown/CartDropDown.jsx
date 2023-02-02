import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Checkout from "../../routes/checkout/checkout";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.styles.scss";

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
