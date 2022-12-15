import React, {useContext} from "react"
import {Context} from "../Context"


function Cart() {
    const {cartItems} = useContext(Context)
    console.log(cartItems)
    return (
        <main className="cart-page">
            {cartItems}
            
            <h1>Check out</h1>
        </main>
    )
}

export default Cart