/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const productsApi = async () =>{
  try{
    const productos = await axios.get(`${baseUrl}/products`);
    return productos.data
  }
  catch(err){
    console.log(err.response.data)
  }
}

export const productUnico = async (id) =>{
  try{
    const product = await axios.get(`${baseUrl}/products/${id}`);
    return product.data
  }
  catch(err){
    console.log(err.response.data)
  }
 
}