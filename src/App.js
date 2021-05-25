import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var fiction = {
    "Harry Potter movies": "4/5",
    "The Lord of the Rings": "3/5"
  };

  var array1 = Object.keys(fiction);

  var animation = {
    "Finding nemo": "4/5",
    "The Smurfs": "3/5"
  };

  var array2 = Object.keys(animation);

  var comedy = {
    Golmaal: "4.5/5",
    Dhol: "3/5"
  };

  var array3 = Object.keys(comedy);
  var [array, setArray] = useState(array1);

  function onClickHandler1() {
    console.log(array1);
    array = array1;
    setArray(array);
  }

  function onClickHandler2() {
    console.log(array2);
    array = array2;
    setArray(array);
  }

  function onClickHandler3() {
    console.log(array3);
    array = array3;
    setArray(array);
  }

  return (
    <div className="App">
      <h1>MOVIE TIME</h1>
      <small style={{ padding: "0px 0px 0px 1rem" }}>
        Checkout my favorite movies. Select a genre to get started.
      </small>
      <hr></hr>
      <div className="container">
        <button onClick={onClickHandler1} className="btn-input">
          fiction
        </button>

        <button onClick={onClickHandler2} className="btn-input">
          animation
        </button>

        <button onClick={onClickHandler3} className="btn-input">
          comedy
        </button>
      </div>

      <div>
        {array.map((movie) => {
          var meaning = fiction[movie];
          if (meaning === undefined) {
            meaning = animation[movie];
            if (meaning === undefined) {
              meaning = comedy[movie];
            }
          }
          return (
            <li className="list-item" key={movie}>
              {movie}
              <div>
                <small>{meaning}</small>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
