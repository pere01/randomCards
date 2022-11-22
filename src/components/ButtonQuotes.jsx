import React from 'react'

const ButtonQuotes = ({ objStyleBtn, handleClick }) => {



  return (
    <div>
      <button style={objStyleBtn} className='card__btn' onClick={handleClick}>&gt;</button>
    </div>
  )
}

export default ButtonQuotes