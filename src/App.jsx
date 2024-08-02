
import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [showModal, setShowModel] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        console.log('Fetched from cache\n\n')
        console.log(apiData)

        setData(apiData)
        return
      }
      //if no cache in local storage 
      localStorage.clear()
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log('Fetched from API\n\n')
        console.log(apiData)
        
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
      } catch (err) {
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
    {data ? (<Main data={data}/>) : (
      <div className="loadingState">
        <p>Loading...</p>
        <i className="fa-solid fa-gear"></i>
      </div>
    ) }
    {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal}/>)}
    {data && (<Footer data={data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
