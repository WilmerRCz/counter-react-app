import React from 'react'

function CounterButton({textButton, onClick, style}) {

  return (
    <div>
      <button className={`${style} border-transparent rounded-full px-2 py-1 bg-purple-600 shadow-purple-500 shadow-md`} onClick={onClick}>{textButton}</button>
    </div>
  )
}

export default CounterButton