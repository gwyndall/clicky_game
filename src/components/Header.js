import React from "react";

function Header(props) {
    return (
        <header>
            <h1>Clicky Game</h1>
            <h3>Current Score: {props.score}</h3>
            <h3>High Score: {props.highScore}</h3>
        </header>
    )
}

export default Header;