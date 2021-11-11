import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";
import { People } from "./CardData.js";

function Card() {
  console.log(People);
  const [people, setPeople] = useState(People);
  console.log(people);
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
          ></TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
