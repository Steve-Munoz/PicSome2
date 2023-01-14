// import React, {useContext, useState} from "react"
// import {Context} from "../Context"
// import CartItem from "../components/CartItem"


// function Cart() {
//     const {cartItems,emptyCart} = useContext(Context)
//     const [buttonText, setButtonText] = useState("Place Order")
//     const cartItemElements = cartItems.map(item=><CartItem key ={item.id} item = {item}/>)
//     const totalCost = 5.99 * cartItems.length
//     const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

//     function placeOrder(){
        
//         setButtonText("Ordering..")
//         setTimeout(()=>{
//             emptyCart()
//             setButtonText("Order Placed")

//         },3000)
        
//     }
    
//     return (
//         <main className="cart-page">
            
            
//             <h1>Check out</h1>
//             {cartItemElements}
//             <p className="total-cost">Total:{totalCostDisplay} </p>
//             <div className="order-button">
//                 {/* <button onClick = {()=>placeOrder()}>{cartItems.length > 0 ? {buttonText}:"Your cart is empty"}</button> */}
//                 <button onClick = {()=>placeOrder()}>{buttonText}</button>
//             </div>
//         </main>
//     )
// }

// export default Cart

import React,{useContext, useState} from "react"
import CartItem from "../components/CartItem"
import {Context} from "../Context"

function Cart(){
    const {cartItems,allPhotos, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => <CartItem item = {item} key = {item.id}/>)

    function placeOrder(){
        setButtonText("Placing Order...")
        setTimeout(()=> {
            emptyCart()
            setButtonText("Order Has Been Placed")
        }, 3000)
    }



    return(
        <main className = "cart-page">
            <h1>Check Out!</h1>
            {cartItemElements}
            <p className ="total-cost">{totalCostDisplay}</p>
            <div className ="order-button">
                <button onClick = {()=> placeOrder()}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart