
import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [showModal, setShowModel] = useState(false)
  
  useEffect(() =>{
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'GET https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        console.log(res)
        const data = await res.json()
        console.log('DATA: \n\n', data)
      } catch(err) {
        console.log(err.message)
      }
    }

    fetchAPIData()
  }, [])
  
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
