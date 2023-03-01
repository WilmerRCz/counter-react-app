import React from 'react'

function CounterButton({textButton, onClick, style}) {

  return (
    <div>
      <button className={`${style} border-transparent rounded-full px-2 py-1 shadow-md`} onClick={onClick}>{textButton}</button>
    </div>
  )
}

export default CounterButton