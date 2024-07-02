import './Friends.jsx'
import Friends from './Friends.jsx'

import playgreen from './assets/leftcontrol/playgreen.png'
import likedlogo from './assets/photo.png'

import fullscreen1 from './assets/leftcontrol/fullscreen1.png'
import fullscreen from './assets/leftcontrol/fullscreen.png'
import listeningon from './assets/leftcontrol/listeningon.png'
import listeningon1 from './assets/leftcontrol/listeningon1.png'

import song1 from './assets/leftcontrol/song1.png'
import song2 from './assets/leftcontrol/song2.png'
import song3 from './assets/leftcontrol/song3.png'


import shuffle from './assets/leftcontrol/shuffle.png'
import back from './assets/leftcontrol/back.png'
import play from './assets/leftcontrol/play.png'
import forward from './assets/leftcontrol/forward.png'
import repeat from './assets/leftcontrol/repeat.png'

import blueberrey from './assets/leftcontrol/blueberrey.png'
import heartoutline from './assets/leftcontrol/heartoutline.png'

import './style.css'
function Picture(){
    return(
        <div className='desktop'>
            <div>
                
            <div className='fats-dominos'>
                <h6 className='h6-dominos font-serif'>Verified Account</h6>
                <h1 className='h1-fat-dominos text-6xl'>Fats Domino</h1>
                <h5 className='h5-dominos'>1000 Listeners</h5>
              </div>
            <div className='lower-area '>
                <div className='following' >
                    <img src={playgreen} className='pl-4 pb-8 pr-8'/> 
                    <div>
                    <button className='following-btn pr-4'>Following</button>
                    <label className='pl-4 pr-4'>...</label>
                    </div>
                </div>


                <div className='popular-liked-combine'>
                    

{/* <div className="table relative overflow-x-auto"><strong>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table></strong>
</div> */}





                <div className='popular-table '>
                    <h1 className='heading'>Popular</h1>
                    <table className='table'>
                    <thead>
    <tr>
        <div className='tr'>
            
        <th className='numbering'>#</th>
      <th className='songname'>Song</th>
      <th className='follower'>Followers</th>
      <th className='time'>Time</th>
        </div>
    </tr>
  </thead>
  <tbody>
    <tr>
       <div className='tr'>
      <td className='numbering'>#</td>
      <td className='songname'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='follower'>Followersm Lockyer</td>
      <td className='time'>Time</td>
       </div>
    </tr>
    <tr>
         <div className='tr'>
      <td className='numbering'>#</td>
      <td className='songname'>Witchy Woman</td>
      <td className='follower'>Followersgles</td>
      <td className='time'>Time</td>
         </div>
    </tr>
    <tr>
       <div className='tr'>
      <td className='numbering'>#</td>
      <td className='songname'>Shining Star</td>
      <td className='follower'>Followers Wind, and Fire</td>
      <td className='time'>Time</td>
       </div>
    </tr>
  </tbody>
                    </table>
                </div>
                <div className='likedsongs-table '>
                    <h1 className='heading'>Liked Songs</h1>
                    <div className='liked-final'>
                        <img src={likedlogo} alt="" />
                        <div className='liked-by-fats'>
                            <h4 className='liked-by-fats-1'>You've liked 4 songs</h4>
                            <h6 className='liked-by-fats-2'>By Fats Domino</h6>
                        </div>
                    </div>
                </div>

                </div>

                {/* Popular Releases Section */}
                <div className='releases'>
                    <div className='popular-releases'>
                        <h1 className='popular-releases-h1'>Popular Releases</h1>
                    </div>
                    <div className='scrollable'>
                       <div className='popular-albums'>
                        {/* song 1 */}
                          <img src={song1} className='popular-albums-img' />
                          <div className='div-popular-albums-h1'>
                          <h1 className='popular-albums-h1'>Song# 1</h1>
                          </div>
                       </div>
                       {/* song 2 */}
                       <div className='popular-albums'>
                          <img src={song2} className='popular-albums-img' />
                          <div className='div-popular-albums-h1'>
                          <h1 className='popular-albums-h1'>Song# 2</h1>
                          </div>
                       </div>
                       {/* song 3 */}
                       <div className='popular-albums'>
                          <img src={song3} className='popular-albums-img' />
                          <div className='div-popular-albums-h1'>
                          <h1 className='popular-albums-h1'>Song# 3</h1>
                          </div>
                       </div>
                    </div>   

                </div>

                <div className='bottom-nav'>
                    <div className='left-control'>
                       <div className='imgBB'>
                         <img src={blueberrey}/>
                       </div>
                
                       <div className='BBFD'>
                         <h2 className='headingBB'>BlueBerrey</h2>
                         <h2 className='headingFD'>Fats Domino</h2>
                       </div>
                
                       <div className='imjBB'>
                         <img src={heartoutline}/>
                       </div>

                    </div>

                    <div className='center-control'>
                        <div className='icons-centeral'>
                            <img  className='icons-centeral' src={shuffle}/>
                            <img  className='icons-centeral' src={back}/>
                            <img  className='playicon' src={play}/>
                            <img  className='icons-centeral' src={forward}/>
                            <img  className='icons-centeral' src={repeat}/>
                        </div>
                    </div>
                    <div className='right-control'>
                       <div className='icons-right'>
                          <img className='icons-right' src={fullscreen1}/>
                          <img className='icons-right' src={fullscreen}/>
                          <img className='icons-right' src={listeningon}/>
                          <img className='icons-right' src={listeningon1}/>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        <Friends/>
        </div>
    )
}
export default Picture;