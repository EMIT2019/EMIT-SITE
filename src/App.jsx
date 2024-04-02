import { useState } from 'react'
import MainContainerComponent from './components/MainContainerComponent.jsx'
import ContentSliderComponent from './components/ContentSliderComponent.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app_container'>
        <MainContainerComponent/>
      </div>
    </>
  )
}

export default App
