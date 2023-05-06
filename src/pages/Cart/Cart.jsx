import React, { useContext } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  removeItem,
  addItemQuantity,
  removeItemQuantity,
  removeAllItems,
} from "../../store/cartItem/cartItemSlice";
import { themeContext } from "../../Context";

function Cart() {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const cartItem = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      {console.log(cartItem)}
      <div className="Cart" style={{ 
      background: darkMode ? "#222" : ""}}>
        <div className="Cart-Container" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action" onClick={() => dispatch(removeAllItems())}>
              Remove all
            </h5>
          </div>

          {cartItem?.map((item) => (
            <div key={item?.id} className="Cart-Items" >
              <div className="image-box">
                <img src={item?.image} style={{ height: "120px" }} />
              </div>
              <div className="about">
                <h1 className="title" style={{ color: darkMode ? "white" : "" }}>{item?.name}</h1>
                <h3 className="subtitle" style={{ color: darkMode ? "white" : "" }}>Size</h3>
                <img src={item?.image} style={{ height: "30px" }} />
              </div>
              <div className="counter">
                <div
                  className="btn"
                  onClick={() => dispatch(addItemQuantity(item))}
                >
                  +
                </div>
                <div className="count" style={{ color: darkMode ? "white" : "" }}>{item?.quantity}</div>
                <div
                  className="btn"
                  onClick={() => dispatch(removeItemQuantity(item))}
                >
                  -
                </div>
              </div>
              <div className="prices" >
                <div className="amount" style={{ color: darkMode ? "white" : "" }}>${item?.totalPrice}</div>
                <div className="save">
                </div>
                <div
                  onClick={() => dispatch(removeItem(item))}
                  className="remove"
                >
                  <u>Remove</u>
                </div>
              </div>
            </div>
          ))}
          {/* second iten */}

          {/* check out */}
          <hr />
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal" style={{ color: darkMode ? "white" : "" }}>Sub-Total</div>
                <div className="items" style={{ color: darkMode ? "white" : "" }}>{cartItem?.length} items</div>
              </div>
              <div className="total-amount" style={{ color: darkMode ? "white" : "" }}>
                $
                {cartItem?.length > 0
                  ? cartItem?.reduce(
                      (accumulator, item) => accumulator + item?.totalPrice,
                      0
                    )
                  : 0}
              </div>
            </div>

            <NavLink to="/CheckOut">
              <button className=" ch-button button">Checkout</button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;