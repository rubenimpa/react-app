import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = (props) => {

    const[products, setProducts] = useState([]);

    const agregarProducto = (producto) => {
        products.push(producto);
        setProducts(products);
    }

    const borrarProducto = (producto) => {

    }

    const clear = () => {

    }

    const isInCart = (idProducto) => {

    }

    return (

        <>
          <CartContext.Provider value={{products,agregarProducto}}>
            {props.children}
          </CartContext.Provider>
        </>

    );
}

export {CartContext, CartProvider};