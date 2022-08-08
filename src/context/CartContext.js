import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([])

    console.log("cartProducts: ", cartProducts)

    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex((productInCart) => productInCart.id  === product.id)
        if(productIndex === -1){
            setCartProducts([...cartProducts, product])
        } else{
            const cartCopy = [...cartProducts];
            cartCopy[productIndex].countQuantity = cartCopy[productIndex].countQuantity + product.countQuantity
            setCartProducts(cartCopy)
            
/*             const cartCopy = [...cartProducts];
            if(cartCopy[productIndex].countQuantity >= cartCopy[productIndex].stock){
                console.log(cartCopy[productIndex].countQuantity)
                alert(`Maximo permitido: ${product.stock}`)
            } else{
                cartCopy[productIndex].countQuantity = cartCopy[productIndex].countQuantity + product.countQuantity
                console.log("cartCopy: ",cartCopy[productIndex].stock)

            } */
        }

/*         const isProductInCart = cartProducts.find((productInCart) => productInCart.id  === product.id)

        const newArray = cartProducts.map(productInCart =>{
            if(productInCart.id === product.id){
                return {...productInCart, countQuantity: productInCart.countQuantity + product.countQuantity}
            } else{
                return productInCart;
            }
        })
        setCartProducts(newArray) */
    }

    const clear = () => {
        setCartProducts([])
    }

    const removeItem = (id) => {
/*         cartProducts.splice(setCartProducts([product])) */
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart)
    }

    
    const data = {
        cartProducts,
        /* para modificarlos se pone setcartproducts */
        setCartProducts,
        clear,
        removeItem,
        addProductToCart,
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

export { CartContext }