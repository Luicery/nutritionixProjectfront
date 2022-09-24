import React, {useState, useEffect} from "react"
import "../css/calculator.css"
function Calculator() {
  const [custName, setCustName] = useState("")
  const [custCal, setCustCal] = useState(0);
  const [custFat, setCustFat] = useState(0);
  const [custSatFat, setCustSatFat] = useState(0);
  const [custChole, setCustChole] = useState(0);
  const [custSod, setCustSod] = useState(0);
  const [custTotCarbs, setCustTotCarbs] = useState(0);
  const [custDietFiber, setCustDietFiber] = useState(0);
  const [custTotSug, setCustTotSug] = useState(0);
  const [custProt, setCustProt] = useState(0);
  const [totalNames, setTotalNames] = useState([])
  const [totalCal, setTotalCal] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalSatFat, setTotalSatFat] = useState(0);
  const [totalChole, setTotalChole] = useState(0);
  const [totalSod, setTotalSod] = useState(0);
  const [totalTotCarbs, setTotalTotCarbs] = useState(0);
  const [totalDietFiber, setTotalDietFiber] = useState(0);
  const [totalTotSug, setTotalTotSug] = useState(0);
  const [totalProt, setTotalProt] = useState(0);

  function newCustomIngredient(event) {
    event.preventDefault();
    setTotalNames(totalNames => [...totalNames, custName])
    setTotalCal(parseFloat(totalCal) + parseFloat(custCal));
    setTotalFat(parseFloat(totalFat) + parseFloat(custFat));
    setTotalSatFat(parseFloat(totalSatFat) + parseFloat(custSatFat));
    setTotalChole(parseFloat(totalChole) + parseFloat(custChole));
    setTotalSod(parseFloat(totalSod) + parseFloat(custSod));
    setTotalTotCarbs(parseFloat(totalTotCarbs) + parseFloat(custTotCarbs));
    setTotalDietFiber(parseFloat(totalDietFiber) + parseFloat(custDietFiber));
    setTotalTotSug(parseFloat(totalTotSug) + parseFloat(custTotSug));
    setTotalProt(parseFloat(totalProt) + parseFloat(custProt));
    setCustName("");
    setCustCal(0);
    setCustFat(0);
    setCustSatFat(0);
    setCustChole(0);
    setCustSod(0);
    setCustTotCarbs(0);
    setCustDietFiber(0);
    setCustTotSug(0);
    setCustProt(0);
    event.target.reset();
  }
  return(
    <div>
    <br/><br/><br/>
      <div id="ingredientSearch">
        <form onSubmit={newCustomIngredient} id="customIngredient">
          <div class="customIngredientLabel">Ingredient Name: </div>
          <input onChange={(event) => setCustName(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Calories:</div>
          <input onChange={(event) => setCustCal(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Fat:</div>
          <input onChange={(event) => setCustFat(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Saturated Fat:</div>
          <input onChange={(event) => setCustSatFat(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Cholesterol:</div>
          <input onChange={(event) => setCustChole(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Sodium:</div>
          <input onChange={(event) => setCustSod(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Total Carbohydates:</div>
          <input onChange={(event) => setCustTotCarbs(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Dietary Fiber:</div>
          <input onChange={(event) => setCustDietFiber(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Total Sugars:</div>
          <input onChange={(event) => setCustTotSug(event.target.value)} class="customIngredientInput"></input><br/>
          <div class="customIngredientLabel">Protein:</div>
          <input onChange={(event) => setCustProt(event.target.value)} class="customIngredientInput"></input><br/>
          <input  type="submit"></input>
        </form>
      </div>
      <div id="nutritionalInformation">
        <ul id="perServe">
          <li class="nutritionX">Per Serving</li>
          <li class="nutritionX">Calories:<span class="value"></span>{totalCal}<span class="percentageOfDV"></span></li>
          <li class="nutritionX">Fat:<span class="value"></span>{totalFat}<span class="percentageOfDV"></span></li>
          <li class="nutritionX">Saturated Fat:<span class="value">{totalSatFat}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Cholesterol:<span class="value">{totalChole}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Sodium:<span class="value">{totalSod}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Total Carbohydrates:<span class="value">{totalTotCarbs}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Dietary Fiber:<span class="value">{totalDietFiber}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Total Sugars:<span class="value">{totalTotSug}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Protein:<span class="value">{totalProt}</span><span class="percentageOfDV"></span></li>
        </ul>
        <ul id="perHundred">
          <li class="nutritionX">Per 100g</li>
          <li class="nutritionX">Calories:<span class="value">{totalCal}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Fat:<span class="value">{totalFat}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Saturated Fat:<span class="value">{totalSatFat}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Cholesterol:<span class="value">{totalChole}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Sodium:<span class="value">{totalSod}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Total Carbohydrates:<span class="value">{totalTotCarbs}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Dietary Fiber:<span class="value">{totalDietFiber}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Total Sugars:<span class="value">{totalTotSug}</span><span class="percentageOfDV"></span></li>
          <li class="nutritionX">Protein:<span class="value">{totalProt}</span><span class="percentageOfDV"></span></li>
        </ul>
      </div>
    </div>
  )
}
export default Calculator
