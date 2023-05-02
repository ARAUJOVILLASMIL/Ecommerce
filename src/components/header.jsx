/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import MenuProducts from "./menuproducts";
const Header = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
}) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [active, setActive] = useState(false);
  let cant = 1;
  const logout = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("logged", { path: "/" }),
      cookies.remove("username", { path: "/" });
    navigate("/");
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setCountProducts(0);
  };

  const total2 = ()=>{
    const total = allProducts.reduce((acc, item) => acc + item.price *  item.quantity, 0);
    return (total).toFixed(2);
 }

  
  return (
    <header>
      <h1>Tienda</h1>
      <div className="container-icon">
        <div className="container-cart-icon">
          <div
            className="container-cart-icon"
            onClick={() => setActive(!active)}
          >
            click
          </div>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <MenuProducts
                allProducts={allProducts}
                setAllProducts={setAllProducts}
          
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total2()}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
           
              
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
      <button type="button" onClick={logout}>
        cerrar sesion
      </button>
    </header>
  );
};

export default Header;
