import { useState } from 'react'
import MainContainerComponent from './components/MainContainerComponent.jsx'

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
