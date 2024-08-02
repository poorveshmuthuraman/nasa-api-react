import React from 'react'

export default function Main(props) {
  const {data} = props
  return (
    <div className="imgContainer">
        <img src="https://apod.nasa.gov/apod/image/2408/2024MaUrM45.jpg" alt={data?.title || "picture-of-the-day"} className='bgImage'/>
    </div>
  )
}
