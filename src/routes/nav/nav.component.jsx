import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../../componets/cart-icon/cart-icon";
import CartDropDown from "../../componets/cart-dropdown/CartDropDown";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./nav.styles";

const Navigation = () => {
  /**
   * @param {state} - the redux state that containe currentUser
   * @returns {state.user.currentUser} - return the user object
   * the complete way to write the function
   * const currentUser = useSelector((state) => state.user.currentUser);
   */
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
