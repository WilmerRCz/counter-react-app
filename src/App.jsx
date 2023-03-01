import { useState } from 'react'
import CounterButton from './components/CounterButton'
import CounterText from './components/CounterText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-white absolute inset-0 flex flex-col justify-center items-center">
      <CounterText count={count}/>
      <div className="flex gap-2">
        <CounterButton textButton="Descrementar" style={"bg-purple-600 shadow-purple-500"} onClick={() => {setCount(count - 1)}}/>
        <CounterButton textButton="Incrementar" style={"bg-green-600 shadow-green-500"} onClick={() => {setCount(count + 1)}}/>
      </div>
    </div>
  )
}

export default App
