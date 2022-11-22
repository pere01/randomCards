import React from 'react'
import ButtonQuotes from './ButtonQuotes'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom, cards }) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }

    return (
        <article className={cards} style={objStyle} >
            <i className="card__icon fa-solid fa-quote-left"></i>
            <p className='card__quote'>{quoteRandom.quote}</p>
            <h1 className='card__author'>{quoteRandom.author}</h1>
            <ButtonQuotes
                objStyleBtn={objStyleBtn}
                handleClick={handleClick} />
        </article>
    )
}

export default QuoteBox