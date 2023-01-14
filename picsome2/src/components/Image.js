// import React, {useState, useContext} from "react"
// import {Context} from "../Context"


// function Image({className,img}){
//     const {toggleFavorite} = useContext(Context)
//     const [hovered, setHovered] = useState(false)


//     function heartIcon() {
//         if(img.isFavorite) {
//             return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
//         } else if(hovered) {
//             return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
//         }
//     }  
//     const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
//     return(
//         <div className = {`${className} image-container`}
//         onMouseEnter = {()=> setHovered(true)}
//         onMouseLeave = {()=> setHovered(false)}
        
//         >
//             <img src = {img.url} className = "image-grid"/>
//             {heartIcon()}
//             {cartIcon}


//         </div>
//     )
// }
// export default Image

import React, {useState,useContext} from "react"

import {Context} from "../Context"

import PropTypes from "prop-types"

function Image({className, img}){
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite,addToCart,removeFromCart, cartItems} = useContext(Context)
   

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            
            return <i className="ri-shopping-cart-fill cart" onClick = {()=> removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
        else if (isHovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    return(
        <div className = {`${className} image-container`}
        onMouseEnter = {()=>{setIsHovered(true)}}
        onMouseLeave = {()=>{setIsHovered(false)}}
        >
            <img src = {img.url} className = "image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className:PropTypes.string,
    img:PropTypes.shape({
        id: PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image

