import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";
import { People } from "./CardData.js";

function Card() {
  const [people, setPeople] = useState(People);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="cards-cont">
      <div className="card-cont">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
