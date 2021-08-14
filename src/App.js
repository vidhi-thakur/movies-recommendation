import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var fiction = {
    "Harry Potter and the Philosopher's Stone": ["5/5", "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world"],
    "Harry Potter and the Half-Blood Prince": ["5/5", "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past."],
    "Harry Potter and the Deathly Hallows – Part 2": ["5/5", "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts"],
    "The Lord of the Rings": ["3/5", "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth"],
    "Clash Of The Titans": ["4/5", "Perseus, demigod, son of Zeus, battles the minions of the underworld to stop them from conquering heaven and earth."],
    "The Chronicles Of Narnia: Prince Caspian": ["5/5", "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion."],
  };

  var array1 = Object.keys(fiction);

  var animation = {
    "Finding nemo": ["4/5", "When Nemo, a young clownfish, is unexpectedly carried far from home, his father and Dory embark on a journey to find Nemo."],
    "The Smurfs": ["3/5", "When evil Gargamel tries to capture them, the Smurfs flee their woodland home, pass through a magic portal and find themselves stranded in New York."],
    "Toy Story 2": ["3/5", "When a greedy toy collector kidnaps Woody, Buzz and his friends set out to rescue him."],
    "Toy Story 4": ["4/5", "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."],
    "Spider-Man: Into the Spider-Verse": ["4/5", "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."],
    "Zootopia": ["3/5", "Judy Hopps becomes the first official bunny cop on the police force. When 14 predator animals go missing, Judy immediately takes the case."]
  };

  var array2 = Object.keys(animation);

  var superhero = {
    "Wonder Woman": ["5/5", "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny"],
    "Avengers: Endgame": ["4/5", "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."],
    "Hellboy 2: The Golden Army": ["3/5", "A prince of the mythical world starts a rebellion against humanity in order to rule the Earth, and Hellboy his team must fight to stop him from locating the all-powerful Golden Army"],
    "Thor: Ragnarok": ["4/5", "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela"],
    "Guardians of the Galaxy": ["4/5", "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe"],
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
                <small>{meaning[0]}</small>
                <p>{meaning[1]}</p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
