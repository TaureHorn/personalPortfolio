import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { hexArrayAssembler } from "../functions/random";

import Info from "../resources/icons/info.svg";

export default function HexGrid() {
    const params = useParams()
    console.log(params)
  function declareHexVariables(e) {
    e.preventDefault();
    setGridVariables({
      count: e.target.hexCount.value,
      size: e.target.hexSize.value.toString() + "px",
      variance: e.target.variance.value / 100,
    });
  }

  const [gridVariables, setGridVariables] = useState({});
  const [randomHexCodes, generateRandomHexCodes] = useState([]);
    console.log(randomHexCodes)

  useEffect(() => {
    generateRandomHexCodes(
      hexArrayAssembler(gridVariables.count, gridVariables.variance)
    );
  }, [gridVariables]);
  return (
    <div className="centerForced" style={{ overflow: "scroll" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={(e) => declareHexVariables(e)}
      >
        <div className="formLabel">
          <label>how many squares do you want to generate?</label>
          <img
            className="icon"
            src={Info}
            height="10px"
            alt="info"
            title="maximum 10,000"
          />
        </div>
        <input type="number" id="hexCount" max={10000} min={1} required />
        <br />
        <div className="formLabel">
          <label>how big (in pixels) do you want the squares to be?</label>
          <img
            className="icon"
            src={Info}
            height="10px"
            alt="info"
            title="maximum 256px, min 1px"
          />
        </div>
        <input type="number" id="hexSize" max={256} min={1} required />
        <br />
        <div className="formLabel">
          <label>color variance (number between 1 and 100)</label>
          <img
            className="icon"
            src={Info}
            height="10px"
            alt="info"
            title="the lower the variance the more similar the randomised colors are"
          />
        </div>
        <input
          type="range"
          id="variance"
          defaultValue={100}
          max={100}
          min={1}
          step={5}
        />
        <br />
        <button type="submit">generate squares</button>
      </form>
      <br />
      <div className="hexGrid">
        {randomHexCodes.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: color,
                height: gridVariables.size,
                width: gridVariables.size,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
