import { React, useState, useEffect } from "react";
import foodJson from "../Json/Food.json";
import "./General.css";
function Home() {
  const [foodType, setFoodType] = useState([]);
  const [parentFood, setParent] = useState("");
  const [name, setName] = useState("");
  const [batterVal, setBatterVal] = useState("");
  const [masterType, setMasterType] = useState([]);
  const [batter, setBatter] = useState([]);
  const [topings, setTopings] = useState([]);
  const [finaltypeVal, setfinaltypeVal] = useState("");

  useEffect(() => {
    var uniqueData = [];
    foodJson.map((jsondata) => uniqueData.push(jsondata.type));
    setFoodType([...new Set(uniqueData)]);
  }, []);

  const handleParentFood = (e) => {
    setParent(e.target.value);
    let currentVal = foodJson.filter((x) => x.type === e.target.value);
    let master = currentVal;
    setMasterType(master);
  };

  const handleName = (e) => {
    setName(e.target.value);
    let currentVal = foodJson.filter((x) => x.name === e.target.value);
    let batterDrop =
      currentVal && currentVal.length > 0 ? currentVal[0].batters.batter : [];
    setBatter(batterDrop);
  };

  const handleBatter = (e) => {
    setBatterVal(e.target.value);
    let currentVal = foodJson.filter((x) => x.name === name);
    let toppingDrop =
      currentVal && currentVal.length > 0 ? currentVal[0].topping : [];
    setTopings(toppingDrop);
  };

  const handleTopping = (e) => {
    setfinaltypeVal(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(
      `Order Confirmed... \n ${parentFood} \n ${name} \n ${batterVal} \n ${finaltypeVal}`
    );
    console.log(`${parentFood}  ${name}  ${batterVal}  ${finaltypeVal}`);
  };
  return (
    <div className="">
      <form className="formControl" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h2 className="text-weight">Food Order</h2>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(e) => handleParentFood(e)}>
            <option key={0} selected="true" disabled="disabled">
              Select
            </option>
            {foodType.map((jsondata) => (
              <option key={jsondata} value={jsondata}>
                {jsondata}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(e) => handleName(e)}>
            <option key={0} selected="true" disabled="disabled">
              Select
            </option>
            {masterType.map((jsondata) => (
              <>
                <option key={jsondata.name} value={jsondata.name}>
                  {jsondata.name}{" "}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(e) => handleBatter(e)}>
            <option key={0} selected="true" disabled="disabled">
              Select
            </option>
            {batter.map((jsondata) => (
              <option key={jsondata.id} value={jsondata.type}>
                {jsondata.type}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-15">
          <select className="formSelect" onChange={(e) => handleTopping(e)}>
            <option key={0} selected="true" disabled="disabled">
              Select
            </option>
            {topings.map((jsondata) => (
              <option key={jsondata.id} value={jsondata.type}>
                {jsondata.type}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="evSubmitDiv pt-15">
          {" "}
          <button className=" evSubmit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
