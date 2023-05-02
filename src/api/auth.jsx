/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from "react-toastify";


const baseUrl = "https://fakestoreapi.com";
const cookies = new Cookies();

export const auth = async (user) => {
  try {
    const userLogin = await axios.post(`${baseUrl}/auth/login`, user);
    const usuario = userLogin.data
    
    cookies.set('username', user.username, {path: "/"});
    const dataUser = await obtenerUs()
    cookies.set('id', dataUser.id, {path: "/"});
    cookies.set('logged', true, {path: "/"});
    toast.success("¡Bienvenido!");
    return true;
  } catch (err) {
    toast.error(err.response.data);
    return false;
  }
};

const obtenerUs = async () =>{
const username = cookies.get('username');
try{
    const dataUser = await axios.get(`${baseUrl}/users`)
    return filterUser(dataUser.data, username)
}
catch(err){
    console.log(err);
} 
}

const filterUser = (users, username) => {
let filteredUsers = users.filter(user => user.username == username);
return filteredUsers
}