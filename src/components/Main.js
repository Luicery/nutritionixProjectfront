import React from "react"
import "../css/main.css"
import {
  Route,
  Link,
  Routes,
  Redirect
} from "react-router-dom"
import Navigation from "./Navigation.js"
import Home from "./Home.js"
import Test from "./Test.js"
import Calculator from "./Calculator.js"
function Main() {
  return(
    <div>
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/calculate" element ={<Calculator/>}/>
          <Route exact path="/test" element={<Test/>}/>
        </Routes>
    </div>
  )
}
export default Main;
