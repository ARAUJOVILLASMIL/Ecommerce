/* eslint-disable no-unused-vars */
import React, {useState}  from 'react';
import CardProducts  from '../components/cards'
import Header from '../components/header';
const Productos =  ()=>{
  const [allProducts, setAllProducts] = useState([]);
 const [countProducts, setCountProducts] = useState(0);
  

      return (
        <><Header 
        allProducts={allProducts}
				setAllProducts={setAllProducts}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
        />
        <CardProducts 
        allProducts={allProducts}
				setAllProducts={setAllProducts}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
        /></>
       
      )
}

export default Productos;
