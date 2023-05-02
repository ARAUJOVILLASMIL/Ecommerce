import { productsApi, productUnico} from "../api/productsApi";


export const mostrarProducts = async ()=>{
    const productos = await productsApi();
    return productos
}

export const mostrarProductsUnico = async (id)=>{
    const productos = await productUnico(id);
    return productos
}

