import React,{useState,useEffect,createContext} from "react"
const Context = createContext()

function ContextProvider(props){
    
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
   
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"


    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setAllPhotos(data))

    },[])

  
    function toggleFavorite(id){
        const updatedArr = allPhotos.map(photo =>{
            if(photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                return{
                    ...photo, isFavorite:!photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
       
       
    }

    function addToCart(newItem){
        setCartItems(prevItems =>[...prevItems, newItem])
        console.log(cartItems)
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    function emptyCart(){
        setCartItems([])
    }
    //setting an emptyarray as a second argument which tells react that my effect
    //doesnt depened on any values from props or state, so it never needs to re-run
    //If you want to run an effect and clean it up only once (on mount and unmount), 
    //you can pass an empty array ([]) as a second argument. 
    //hile passing [] as the second argument is closer to the familiar 
    //componentDidMount and componentWillUnmount mental model,

    return(
        <Context.Provider value = {{allPhotos, toggleFavorite, addToCart, removeFromCart,emptyCart, cartItems}}>
            {props.children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}

