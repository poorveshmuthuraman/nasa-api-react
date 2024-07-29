
import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModel] = useState(false)
  
  function handleToggleModal() {
    setShowModel(!showModal)
  }


  return (
    <>
    <Main/>
    {showModal && (<SideBar handleToggleModal={handleToggleModal}/>)}
    <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
