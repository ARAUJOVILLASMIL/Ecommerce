/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MenuProducts = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
 
}) => {
  const deleteItem = (id, num) => {
    if (allProducts.length == 1) {
      setAllProducts([]);
     
      setCountProducts(0);
    } else {
      const results = allProducts.filter((item) => item.id !== id);
      setCountProducts(countProducts - num);
      setAllProducts(results);
    
    }
  };



  const suma = (product) => {
    const products = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1, } : item
    );
   setCountProducts(countProducts + 1);
  
    return setAllProducts(products);
    
  };
  const resta = (product) => {
    if (product.quantity == 1) {
      alert('no se puede agregar un valor menor a 1')
    }else{
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
     
      setCountProducts(countProducts - 1);

      return setAllProducts(products);
    }
    
  };
  return (
    <div className="row-product">
      {allProducts.map((product) => (
        <div className="cart-product" key={product.id}>
          <div className="info-cart-product">
            <p className="titulo-producto-carrito">{product.title}</p>
            <span className="precio-producto-carrito">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
          <div className="number-input">
            <button onClick={() => resta(product)}>-</button>
            <p>{product.quantity}</p>
            <button onClick={() => suma(product)}>+</button>
          </div>
          <button className="icon-close"  onClick={() => deleteItem(product.id,product.quantity )}>
            el
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuProducts;
/*<input
              className=""
              min="1"
              name="quantity"
              value={product.quantity}
              type="number"
            />*/
