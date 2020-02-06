import React, { useState } from "react";
import decimatToRoman from "../converters/decimalToRoman";
import romanToDecimal from "../converters/romanToDecimal";
import checkValidator from "../helpers/validator";
import calculator from "../helpers/calculator";
import Help from "./Help";
import "./Claculator.css";

export default function Claculator() {
  let [romanResult, setRomanResult] = useState("");
  let [intResult, setIntResult] = useState(0);
  let [firstInput, setFirstInput] = useState("");
  let [secondInput, setSecondInput] = useState("");
  let [isValid1, setIsValid1] = useState(true);
  let [isValid2, setIsValid2] = useState(true);

  const { add, sub, mul, div } = calculator;

  function firstInputHandler(e) {
    firstInput = e.target.value;
    setIsValid1(checkValidator(firstInput));
    firstInput = isNaN(firstInput)
      ? romanToDecimal(firstInput)
      : Number(firstInput);
  }

  function secondInputHandler(e) {
    secondInput = e.target.value;
    setIsValid2(checkValidator(secondInput));
    secondInput = isNaN(secondInput)
      ? romanToDecimal(secondInput)
      : Number(secondInput);
  }

  function setFinalRomanResult() {
    setIntResult(intResult);
    setRomanResult(decimatToRoman(intResult));
    setFirstInput(firstInput);
    setSecondInput(secondInput);
  }

  function addHandler() {
    intResult = add(firstInput, secondInput);
    setFinalRomanResult();
  }
  function subHandler() {
    intResult = sub(firstInput, secondInput);
    setFinalRomanResult();
  }
  function mulHandler() {
    intResult = mul(firstInput, secondInput);
    setFinalRomanResult();
  }
  function divHandler() {
    intResult = div(firstInput, secondInput);
    setFinalRomanResult();
  }
  function submit() {
    setRomanResult("");
    setFirstInput("");
    setSecondInput("");
  }
  return (
    <div className="calculator">
      <form onSubmit={submit}>
        <h2 className="header">Enter Roman numerals and/or numbers</h2>
        <hr />
        <input
          className="calculator-screen"
          placeholder="Enter value"
          onChange={firstInputHandler}
          name="firstNum"
          type="text"
        />
        <label className="label">
          {isValid1 ? (
            decimatToRoman(firstInput)
          ) : (
            <sub className="error">InValid value</sub>
          )}
        </label>
        <input
          className="calculator-screen"
          placeholder="Enter value"
          onChange={secondInputHandler}
          name="secondNum"
          type="text"
        />
        <label className="label">
          {isValid2 ? (
            decimatToRoman(secondInput)
          ) : (
            <sub className="error">InValid value</sub>
          )}
        </label>

        <div className="calculator-keys">
          <button type="button" className="operator" onClick={addHandler}>
            +
          </button>
          <button type="button" className="operator" onClick={subHandler}>
            -
          </button>
          <button type="button" className="operator" onClick={mulHandler}>
            &times;
          </button>
          <button type="button" className="operator" onClick={divHandler}>
            &divide;
          </button>
          <button
            type="reset"
            onClick={submit}
            className="all-clear"
            value="all-clear"
          >
            AC
          </button>
        </div>

        <hr />
        <div className="result">
          The Result: {isValid1 && isValid2 ? romanResult : ""}
        </div>
      </form>
      <Help />
    </div>
  );
}
