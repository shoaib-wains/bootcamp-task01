import { useState } from 'react'
import './App.css'
import './SideBar.jsx'
import SideBar from './SideBar.jsx'
import "./Picture.jsx"
import Picture from './Picture.jsx'
import './Friends.jsx'
import Friends from './Friends.jsx'
// https://www.figma.com/file/zKGmDMAjYRTOVMKnwttu2u/Spotify-UI?type=design&node-id=0%3A1&mode=design&t=cQIZ94LEfiVH1c5P-1 spotify.com
function App() {

  return (
    <>
    <div className='flex-container'>
    <SideBar/>
    <Picture/>
    {/* <Friends/> */}
    </div>

    </>
  )
}

export default App
