import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = (props) => {

    const[products, setProducts] = useState([]);

    const agregarProducto = (producto) => {
        setProducts([...products, producto]);
    }

    const borrarProducto = (producto) => {
        console.log(producto);
        setProducts(products.filter(prod => prod.id !== producto.id));
    }

    const clear = () => {
        setProducts([]);
    }

    const isInCart = (idProducto) => {
        return !(products.find(producto => producto.id === idProducto) === undefined);
    }

    return (

        <>
          <CartContext.Provider value={{products,agregarProducto, borrarProducto}}>
            {props.children}
          </CartContext.Provider>
        </>

    );
}

export {CartContext, CartProvider};