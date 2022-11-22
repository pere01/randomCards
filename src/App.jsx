import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox.jsx'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const getRandomFromArray = arr => {

    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRamdom] = useState(getRandomFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(quotes))
  const [cards, setCards] = useState('card')

  const handleClick = () => {
    let animation = 0;
    const anim = setInterval(() => {
      if (animation === 0) {
        setCards(cards + 'card-transform')
      }
      if (animation === 1) {
        setCards(cards + 'card-transitionNone')
        setQuoteRamdom(getRandomFromArray(quotes))
      }
      if (animation === 2) {
        setCards('card')
        setColorRandom(getRandomFromArray(colors))
      }
      if (animation === 3) clearInterval(anim)
      animation += 1

    }, 170)
  }

  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>

      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
        cards={cards} />
    </div>
  )
}

export default App

