import { useState } from 'react'
import './random-img.css'


const RandomImage = () =>{
const [count, setCount] = useState(10)

function changeCount() {
    setCount(count + 1)
    
}
const imageSrc = `https://picsum.photos/600/5${count}`
    return(
        <>
        <section className="randomizer">
            <div className="container">
            <div className="image-container">
                <img src={imageSrc} alt="Image" />
                <button className="randomize-btn" onClick={changeCount}>Randomize</button>
            </div>
            </div>
        </section>
        </>
    )
}

export default RandomImage