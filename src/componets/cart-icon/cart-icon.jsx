import { useContext } from "react";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartIconContainer>
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => {
          dispatch(setIsCartOpen(!isCartOpen));
        }}
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
