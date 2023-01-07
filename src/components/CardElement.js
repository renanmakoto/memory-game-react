import React from 'react'


export default function CardElement(props) {
    return (
        <div onClick={() => {props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
            <div className="cardFront">
                <img className="icon" 
                src={`icons/${props.card.icon}.png`} 
                alt={"props.card.icon"}></img>
            </div>
            <div className="cardBack">
                {"amDot"}
            </div>
        </div>
    )
}