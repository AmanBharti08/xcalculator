import React, { useState } from "react";
import styles from "./Calc.module.css";
const Calc = () => {
  const [display, setDisplay] = useState("");
  const [ans, setAns] = useState();

  const handleClick = () => {
    try {
      if (display === "") {
        setAns("Error");
      } else {
        let result = eval(display);
        if (result === Infinity) {
          setAns("Infinity");
        } else if (isNaN(result)) {
          setAns("NaN");
        } else {
          setAns(result);
        }
      }
    } catch (error) {
      setAns("Error");
    }
  };

  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>
      <input type="text" value={display} readOnly />
      <div>
        <h4>{ans}</h4>
      </div>
      <div className={styles.gridContainer}>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            7
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            8
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            9
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            4
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            5
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            6
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            1
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            3
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay("");
            }}
          >
            C
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            0
          </button>
        </div>
        <div>
          <button onClick={handleClick}>=</button>
        </div>
        <div>
          <button
            onClick={(e) => {
              setDisplay(display + e.target.innerText);
            }}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
