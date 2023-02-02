import "./cart-icon.styles.scss";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import React from "react";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
