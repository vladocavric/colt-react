import { useState } from 'react'
import './App.css'

function App() {
  const options = ['🍒', '🍇', '🍓']
  const [selected, setSelected] = useState([]);
  const runSlot = () => {
    const creatingArr = []
    for (let index = 0; index < 3; index++) {
      const index = Math.floor(Math.random() * options.length)
      const element = options[index];
      creatingArr.push(element)
    }

    setSelected(creatingArr)
  }
  return (
    <>
    <div className="symbols">
    {selected.map(symbol => <h1>{symbol}</h1>)}
    </div>
    {!!selected.length && <h3>{selected[0] === selected[1] && selected[0] === selected[2] ? 'you win' : 'you lose' }</h3>}
    <button onClick={runSlot}>run slot</button>
    </>
  )
}

export default App
