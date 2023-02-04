import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import React from "react";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer>
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
