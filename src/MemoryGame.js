import React, { useEffect, useState } from "react"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"
import game from './game/game'
export default function MemoryGame() {
  
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardsFromCardObj())
  }, [])

  function restartGame() {
    game.clearCards()
    setCards(game.createCardsFromCardObj())
    setGameOver(false)
  }

  function handleFlip(card) {
    game.flipCard(card.id, () => {
      setGameOver(true)
    }, () => {
      //NoMatchCallback
      setCards([...game.cards])
    })
    setCards([...game.cards])
    }

  return(
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} onRestartGame={restartGame}></GameOver>
    </div>
  )
}
