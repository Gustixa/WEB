import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages  = [
  {"src":"/img/helmet-1.png", matched:false},
  {"src":"/img/potion-1.png", matched:false},
  {"src":"/img/ring-1.png", matched:false},
  {"src":"/img/scroll-1.png", matched:false},
  {"src":"/img/shield-1.png", matched:false},
  {"src":"/img/sword-1.png", matched:false},
  {"src":"/img/codeCombat-1.jpg", matched:false},
  {"src":"/img/codeCombat-2.jpg", matched:false},
  {"src":"/img/socialCC.jpg", matched:false},
]

const App = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // Revolviendo cartas
  const shuffleCards = () => {
    const shuffledCards = [...cardImages,...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    
    
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // Obtener seleccion
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Comparacion de las 2 cartas seleccionadas
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)

      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if(card.src === choiceOne.src){
              return {...card, matched:true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        setTimeout(() => resetTurn(),  1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // reinicar selecciones e incremetar turnos
  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
    setDisabled(false)
  }

  // Iniciar el juego de manera automatica
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Flipping Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>    
  )
}

export default App