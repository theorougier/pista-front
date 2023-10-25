import React from "react";
import Chevron from "../assets/logo/chevron.svg"
import Cross from "../assets/logo/cross.svg"

function Question({
  questions,
  label,
  sub_label,
  type,
  onChange,
  value,
  options,
  currentQuestion,
  handleNext,
}) {

  if (type === "select") {
    return (
      <div className="flex flex-col input">
        <label>
          {label}
          <br />
          <strong>{sub_label}</strong>
        </label>
        <div>
          <select value={value} onChange={onChange}>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button onClick={handleNext}>
            {currentQuestion === questions.length - 1 ? <img src={Cross}/> : <img src={Chevron}/>}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col input">
      <label>
        {label}
        <br />
        <strong>{sub_label}</strong>
      </label>
      <div>
        <input type={type} onChange={onChange} value={value} />
        <button onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? <img src={Cross}/> : <img src={Chevron}/>}
        </button>
      </div>
    </div>
  );
}

export default Question;
