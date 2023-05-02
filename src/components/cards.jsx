/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { mostrarProducts } from "../services/dataproducts";
import "../App.css";
import { productsApi, productUnico } from "../api/productsApi";

const CardProducts = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
}) => {
  const [db, setdb] = useState([]);

  useEffect(() => {
    const getdata = () => {
      mostrarProducts().then((res) => setdb(res));
    };
    getdata();
  }, []);

  const onAddProduct = (id) => {
    productUnico(id)
      .then((res) => {
        const productQtf = { ...res, quantity: 1 };
        if (allProducts.find((item) => item.id === id)) {
          alert("este producto ya existe");
        } else {
          setCountProducts(countProducts + productQtf.quantity);
          setAllProducts([...allProducts, productQtf]);
        }
      })
      .catch((err) => console.log(err));
    // const productQtf = { ...product, quantity: 1 };
    // if (allProducts.find((item) => item.id === product.id)) {
    //   alert("este producto ya existe");
    // } else {
    //   setCountProducts(countProducts + productQtf.quantity);
    //   setAllProducts([...allProducts, productQtf]);
    // }
    // const session = sessionStorage.setItem(
    //   "products",
    //   JSON.stringify(allProducts)
    // );
    // const getSession = JSON.parse(sessionStorage.getItem("products"));
    // console.log(getSession);

    // if (allProducts.length != 0) {
    //   setAllProducts(getSession);
    // }
  };

  return (
    <div className="container-items">
      {db.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product.id)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProducts;
