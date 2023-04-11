import React, { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard.jsx'
import './Firebase/fb'
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore'


const cardImages  = [
  {"src":"./public/img/thor.jpg", matched:false},
  {"src":"./public/img/kgr.jpg", matched:false},
  {"src":"./public/img/heroes-rush.jpg", matched:false},
  {"src":"./public/img/aniversary.jpg", matched:false},
  {"src":"./public/img/alien.jpg", matched:false},
  {"src":"./public/img/magic.jpg", matched:false},
  {"src":"./public/img/codeCombat-1.jpg", matched:false},
  {"src":"./public/img/codeCombat-2.jpg", matched:false},
  {"src":"./public/img/socialCC.jpg", matched:false},
  {"src":"./public/img/tenShi.jpg", matched:false},
  {"src":"./public/img/enano.jpg", matched:false},
  {"src":"./public/img/ice.jpg", matched:false},
  {"src":"./public/img/king.jpg", matched:false},
  {"src":"./public/img/rock.jpg", matched:false},
  {"src":"./public/img/king2.jpg", matched:false},
  {"src":"./public/img/darkSoldier.jpg", matched:false},
  {"src":"./public/img/fenix.jpg", matched:false},
  {"src":"./public/img/gerald.jpg", matched:false},
]

const App = () => {
  const[backGround, setBackGround] = useState([])
  var [cards, setCards] = useState([])

  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  /*
  useEffect(() => {
    const queryDB = getFirestore()
    const queryCollection = collection(queryDB, 'cards')
    getDocs(queryCollection) // trayendo el doc
      .then((res) => setCards(res.docs.map((image) => ({ id: image.id, ...image.data()}))))
  }, [])
  
  // Cambiando el id de las imagenes
  for(let i = 0; i < cards.length; i++){
    cards[i]['id'] = Math.random()
  }
  */
  // Revolviendo cartas
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({id: Math.random(),...card }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards)
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
