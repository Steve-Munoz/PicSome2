// import React, {useContext} from "react"
// import Image from "../components/Image"
// import {getClass} from "../utils"
// import {Context} from "../Context"


// function Photos(){

//     const {allPhotos} = useContext(Context)

//     const displayAllPhotos = allPhotos.map((img, i)=> <Image key = {img.id} img={img} className={getClass(i)}/>)
//     return(
//         <main className = "photos">
//             {displayAllPhotos}


//         </main>
//     )
// }

// function Photos() {
//     const {allPhotos} = useContext(Context)

// console.log(allPhotos)
//     // const displayAllPhotos = allPhotos.map(photo=> <Image key={photo.id} img={photo.url} className={getClass(photo.id)} />)
//     const displayAllPhotos = allPhotos.map((img, i)=> 
//     (<Image key={img.id} img={img} className={getClass(i)} />))
//     return (
//         <main className="photos">
//             {displayAllPhotos}
            
//         </main>
//     )
// }



// export default Photos

import React,{useContext} from "react" // useContext is A React Hook that lets you read and 
//subscribe to context from your component. useContext returns the context value for the context you passed.
//To determine the context value, React searches the componnent tree and finds the closest context provider
// above for that particular context.
// Accepts a context object(the value returned from React.createContext) and returns the current context for that context.
// The current context value is determined by the value prop of the nearest <Mycontext.Provider>....
//.. above the calling component in the tree
//A component calling useContext will always re-render when the context value changes.
// If re-rendering the component is expensive, you can optimize it by using memoization.
import {Context} from "../Context"
import {getClass} from "../utils"
import Image from "../components/Image"

function Photos (){
    const {allPhotos} = useContext(Context)
    const displayAllPhotos = allPhotos.map((img,i)=><Image key = {img.id} img = {img} className = {getClass(i)} />)
    return(
        <main className = "photos">
            {displayAllPhotos}

        </main>
    )
}

export default Photos