import React,{useState, useContext} from "react"
import {Context} from "../Context"

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const [trashHovered, setTrashHovered] = useState(false)
    function trashLogic(){
        if(trashHovered){
            return <i className="ri-delete-bin-fill" onClick = {()=> removeFromCart(item.id)}></i>
        }
        else {
            return <i className="ri-delete-bin-line"></i>
        }
    }
    return(
        <div 
        onMouseEnter = {()=>{setTrashHovered(true)}}
        onMouseLeave = {()=>{setTrashHovered(false)}} 
        className = "cart-item"

        >
        
            {trashLogic()}
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>

    )
}
export default CartItem