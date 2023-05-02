/* eslint-disable no-unused-vars */
import React from "react";
export const uservalid = (user) =>{
    const userName = user.username;
    const password = user.password;
    const regex = new RegExp(/^[^]+$/);
    
  
    if (!regex.test(userName)  || !regex.test(password)) {
      return false;
    } else {
      return true;
    }
   
}
