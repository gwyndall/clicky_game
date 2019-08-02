import React from "react";
import "./App.css";
// import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cardsData from "./cardsData";

class App extends React.Component {
  state = {
    cardsData: cardsData,
    score: 0,
    highScore: 0,
    clickedArray: []
  };

  handleClick = ({ target }) => {
    console.log(target.id);
    var score = this.state.score;
    var highScore = this.state.highScore;

    if (this.state.clickedArray.includes(target.id)) {
      alert("You Lose!");
      if (score > highScore) {
        
        this.setState({highScore : this.state.score})
        console.log(this.state.highScore);
      }
      this.setState({score: 0, clickedArray: []})
      

    } else {
      
      // console.log(this);
      var cardsData = this.state.cardsData;
      cardsData = this.shuffle(cardsData);
      
      this.setState({
        cardsData: cardsData,
        score: this.state.score + 1,
        clickedArray: [...this.state.clickedArray, target.id]
      });
      console.log(this.state.clickedArray);
      
    }
  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  render() {
    let arrayOfJsx = this.state.cardsData.map(item => (
      <img
        onClick={this.handleClick}
        className="card"
        key={item.id}
        id={item.id}
        src={item.img}
        alt={item.id}
      />
    ));

    
    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore} />
        <div className="playArea">{arrayOfJsx}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
