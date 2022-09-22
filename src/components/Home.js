import React, {useEffect, useState} from "react"
import { useSpring, animated } from 'react-spring'
import "../css/home.css"
import runnerImage from "../assets/runningguy.jpeg"
//Ugly but maybe can use this image
import foodplate from "../assets/foodplate.png"
import cutlery from "../assets/cutlery.png"
function Home() {
  const [flip, setFlip] = useState(false)
  const flyin = useSpring({
    to: {x: "10em"},
    from: {x: 0},
    reset:true,
    reverse:flip
  })
  const flyout = useSpring({
    to: {x: 0},
    from: {x: "10em"},
    reset:true,
    reverse:flip,
    onrest: () => setFlip(!flip)
  })
  return(
    <div id="frontPage">
      <img id="foodplate" src={foodplate}/>
      <img id="fork" src={cutlery}/>
      <img id="knife" src={cutlery}/>
      <h1 id="SUPATITLE">NUTRITIONIX</h1>
      <animated.h1 onHover={() => setFlip(!flip)} style={{flyout}} id="initalCalc" class="calculateButton">Calculate Your Nutrition!</animated.h1>
      <animated.h1 onHover={() => setFlip(!flip)} style={{flyin}} id="finalCalc" class="calculateButton">Calculate Your Nutrition!</animated.h1>
    </div>
  )
}
export default Home
