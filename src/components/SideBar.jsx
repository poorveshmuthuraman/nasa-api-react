import React from 'react'

export default function SideBar(props) {
  const {handleToggleModal} = props
  return (
    <div className='sidebar'>
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Marshal Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sint id soluta culpa voluptatibus similique ratione veritatis in, corporis dolorem magnam accusantium nostrum sunt quis nisi suscipit tempora modi eligendi.</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

  )
}
