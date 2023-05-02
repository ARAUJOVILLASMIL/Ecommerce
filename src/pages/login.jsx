/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React , { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { auth } from "../api/auth";
import { uservalid} from "../services/uservalid"
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ifValid = uservalid(values)
   
    if (ifValid) {
      const isLogin = await auth(values);
      
      if (isLogin) {
            navigate("/productos");
         
           }
    }
    else{
      toast.error('Error! ingrese valores validos')
    }
  }


  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <form className="form-group" onSubmit={handleSubmit}>
          <label>Usuario: </label>
          <br />
          <input type={"text"} className="form-control" name={"username"} onChange={handleChange} value={values.username}/>
          <br />
          <label>Contraseña: </label>
          <br />
          <input type={"password"} className="form-control" name={"password"} onChange={handleChange} value={values.password} />
          <br />
          <button className="" type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
