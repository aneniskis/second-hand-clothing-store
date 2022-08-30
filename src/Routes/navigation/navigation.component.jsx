import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../Component/cart-icon/cart-icon.component";
import CartDropdown from "../../Component/cart-dropdown/cart-dropdown.component";
// import { UserContext } from "../../context/user.context";
// import { SignOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.style";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  const SignOutUser = () => dispatch(signOutStart());
  // const { currentUser } = useContext(UserContext);

  // const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);
  // const signOutHandler = async () => {
  //   const res = await SignOutUser();
  //   setCurrentUser(null);
  //   console.log(res);
  // };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/second-hand-clothing-shop">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/second-hand-clothing-shop/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/second-hand-clothing-shop/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
