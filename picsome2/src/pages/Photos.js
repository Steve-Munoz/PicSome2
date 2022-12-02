import React, {useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context"


function Photos(){

    const {allPhotos} = useContext(Context)

    const displayAllPhotos = allPhotos.map((img, i)=> <Image key = {img.id} img={img} className={getClass(i)}/>)
    return(
        <main className = "photos">
            {displayAllPhotos}


        </main>
    )
}

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



export default Photos