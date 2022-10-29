import { React, useState, useEffect } from "react";
import foodJson from "../Json/Food.json";
import "./General.css";
function Home() {
  const [foodType, setFoodType] = useState([]);
  const [parentFood, setParentFood] = useState("");
  const [foodName, setFoodName] = useState("");
  const [batterValue, setBatterValue] = useState("");
  const [masterType, setMasterType] = useState([]);
  const [batter, setBatter] = useState([]);
  const [topping, setTopping] = useState([]);
  const [toppingType, setToppingType] = useState("");

  useEffect(() => {
    var uniqueData = [];
    foodJson.map((jsondata) => uniqueData.push(jsondata.type));
    setFoodType([...new Set(uniqueData)]);
  }, []);

  const handleParentFood = (event) => {
    setParentFood(event.target.value);
    let currentValue = foodJson.filter((getJsondata) => getJsondata.type === event.target.value);
    let masterFood = currentValue;
    setMasterType(masterFood);
  };

  const handlefoodName = (event) => {
    setFoodName(event.target.value);
    let currentValue = foodJson.filter((getJsondata) => getJsondata.name === event.target.value);
    let batterType =
    currentValue && currentValue.length > 0 ? currentValue[0].batters.batter : [];
    setBatter(batterType);
  };

  const handleBatter = (event) => {
    setBatterValue(event.target.value);
    let currentValue = foodJson.filter((getJsondata) => getJsondata.name === foodName);
    let toppingType =
    currentValue && currentValue.length > 0 ? currentValue[0].topping : [];
    setTopping(toppingType);
  };

  const handleTopping = (event) => {
    setToppingType(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(
      `Order Confirmed... \n ${parentFood} \n ${foodName} \n ${batterValue} \n ${toppingType}`
    );
    console.log(`${parentFood}  ${foodName}  ${batterValue}  ${toppingType}`);
  };
  return (
    <div className="">
      <form className="formControl" onSubmit={(event) => handleSubmit(event)}>
        <div>
          <h2 className="text-weight">Food Order</h2>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(event) => handleParentFood(event)}>
            <option key={0} selected={true} disabled="disabled">
              Select
            </option>
            {foodType.map((jsondata) => (
              <option key={jsondata} value={jsondata}>
                {jsondata}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(event) => handlefoodName(event)}>
            <option key={0} selected={true} disabled="disabled">
              Select
            </option>
            {masterType.map((jsondata) => (
              <>
                <option key={jsondata.name} value={jsondata.name} >
                  {jsondata.name}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(event) => handleBatter(event)} required>
            <option key={0} selected={true} disabled="disabled" required>
              Select
            </option>
            {batter.map((jsondata) => (
              <option key={jsondata.id} value={jsondata.type} >
                {jsondata.type}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(event) => handleTopping(event)} >
            <option key={0} selected={true} disabled="disabled">
              Select
            </option>
            {topping.map((jsondata) => (
              <option key={jsondata.id} value={jsondata.type} >
                {jsondata.type}
              </option>
            ))}
          </select>
        </div>
        <div className="evSubmitDiv pt-15">
          <input className=" evSubmit" type="submit" text="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Home;
