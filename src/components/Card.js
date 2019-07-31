import React from "react";
import cardsData from "../cardsData";

function Card() {
    

const picArray = cardsData
  
//   document.getElementsByClassName("card").on("click", shuffle(picArray));
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
      
      };
      return picArray;
    };
  
    let arrayOfJsx = picArray.map( item => <img onClick={} className="card" key={item.id} data-id={item.id} src={item.img} alt={item.id}  /> )

    return (
      <div className="playArea">
        {arrayOfJsx}
      </div>
    )};

    export default Card;

