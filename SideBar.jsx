import './style.css'
import menu from'./assets/leftcontrol/menu.png'
import home from'./assets/leftcontrol/home.png'
import librarysmall from'./assets/leftcontrol/librarysmall.png'
import searchsmall from'./assets/leftcontrol/searchsmall.png'

import likedsongs from'./assets/leftcontrol/likedsongs.png'
import addplaylist from'./assets/leftcontrol/addplaylist.png'

function SideBar(){
    return(
        <div className='responsiv'>
<div class="sidenav-top">

<div className='upper-sidebar'>
<div className='icons'>
<img src={menu} alt="" />
</div>
<div className='icons'>
<img src={home}/>
<a href="#">Home</a>
</div>
<div className='icons'>
<img src={searchsmall}/>
<a href="#">Search</a>
</div>
<div className='icons'>
<img src={librarysmall}/>
<a href="#">Your Library</a>
</div>
</div>

<div className='lower-sidebar'>  
  <div className='icons'>
    <img src={likedsongs} alt="" />
    <a href="#">Create Playlist</a>
  </div>
  <div className='icons'>
    <img src={addplaylist} alt="" />
  <a href="#">Liked Songs</a>
  </div>
</div>


</div>


<div className='sidenav-bottom'>
  <div className='sidenav-bottom-item'>
  <label >item 1</label>
  <label >item 2</label>
  <label >item 3</label>
  <label >item 4</label>
  </div>  
</div>

    </div>
    )
}
export default SideBar;