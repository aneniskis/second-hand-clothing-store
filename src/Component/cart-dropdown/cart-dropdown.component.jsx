import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/CartItem";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckOuthandler = () => {
    navigate("/second-hand-clothing-store/checkout");
  };

  const cartItems = useSelector(selectCartItems);

  // const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            Your cart is empty
          </span>
        )}
      </div>
      <Button onClick={goToCheckOuthandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
