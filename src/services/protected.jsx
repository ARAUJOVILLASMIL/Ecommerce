import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Protected = () =>{
const userLogin = cookies.get('logged')
if(userLogin) {
    return <Outlet />
}else{
    return <Navigate to="/" />;
}

}

export default Protected