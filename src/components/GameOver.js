import React, { Fragment } from 'react'

export default function GameOver(props) {
    return (
        props.show?
        <div id="gameOver">
            <div>
                Game Over!
            </div>
            <button id="restart" onClick={props.onRestartGame}>Play again!</button>
        </div> : <Fragment/>
    )
}