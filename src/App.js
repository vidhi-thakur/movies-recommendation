import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var fiction = {
    "Harry Potter and the Philosopher's Stone": "5/5",
    "Harry Potter and the Half-Blood Prince": "5/5",
    "Harry Potter and the Deathly Hallows – Part 2": "5/5",
    "The Lord of the Rings": "3/5",
    "Clash Of The Titans": "4/5",
    "The Chronicles Of Narnia: Prince Caspian": "5/5",
  };

  var array1 = Object.keys(fiction);

  var animation = {
    "Finding nemo": "4/5",
    "The Smurfs": "3/5",
    "Toy Story 2": "3/5",
    "Toy Story 4": "4/5",
    "Spider-Man: Into the Spider-Verse": "4/5",
    "Zootopia": "3/5"
  };

  var array2 = Object.keys(animation);

  var superhero = {
    "Wonder Woman": "5/5",
    "Avengers: Endgame": "4/5",
    "Hellboy 2: The Golden Army": "3/5",
    "Thor: Ragnarok": "4/5",
    "Guardians of the Galaxy": "4/5",
  };

  var array3 = Object.keys(superhero);
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
          superhero
        </button>
      </div>

      <div>
        {array.map((movie) => {
          var meaning = fiction[movie];
          if (meaning === undefined) {
            meaning = animation[movie];
            if (meaning === undefined) {
              meaning = superhero[movie];
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
