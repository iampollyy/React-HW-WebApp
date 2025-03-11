import { useState } from 'react'
import './App.css'
import List from './components/FruitList/FruitList'

function App() {

  return (
    <>
      <h1 className='heading'>My Fruit List</h1>
      <List />
    </>
  )
}

export default App
