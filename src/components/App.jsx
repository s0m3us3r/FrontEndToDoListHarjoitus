import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ToDoList />
      </div>
    </>
  )
}

export default App;
