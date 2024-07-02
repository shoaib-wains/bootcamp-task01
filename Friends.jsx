import './friends.css'
import friend1 from './assets/leftcontrol/friend1.png'
import playing from './assets/leftcontrol/playing.png'

function Friends(){
    return(
        <div className="artist">
            {/* friends activity main div */}
            <div className='friends-activity'>
                <h1 className='fah1'>Friends Activity</h1>
            </div>
            {/* div showing friends details */}
            <div className='friends'>
               <div>


                  <div className='friend1'>


                     <div className='body'>
                       <img className="img" src={friend1} />
                       <div className='detail'>
                          <h2 className='heading-detail-friend'>Name</h2>
                          <h2 className='heading-detail'>Song</h2>
                          <h2 className='heading-detail-singer'>Singer</h2>
                       </div>
                     </div>


                     <div className='playing-icon'>
                    <img src={playing} />
                  </div>


                  </div>



                  <div className='friend1'>


                     <div className='body'>
                       <img className="img" src={friend1} />
                       <div className='detail'>
                          <h2 className='heading-detail-friend'>Name</h2>
                          <h2 className='heading-detail'>Song</h2>
                          <h2 className='heading-detail-singer'>Singer</h2>
                       </div>
                     </div>


                     <div className='playing-icon'>
                    <img src={playing} />
                  </div>


                  </div>





                                    <div className='friend1'>


                     <div className='body'>
                       <img className="img" src={friend1} />
                       <div className='detail'>
                          <h2 className='heading-detail-friend'>Name</h2>
                          <h2 className='heading-detail'>Song</h2>
                          <h2 className='heading-detail-singer'>Singer</h2>
                       </div>
                     </div>


                     <div className='playing-icon'>
                    <img src={playing} />
                  </div>


                  </div>






                                    <div className='friend1'>


                     <div className='body'>
                       <img className="img" src={friend1} />
                       <div className='detail'>
                          <h2 className='heading-detail-friend'>Name</h2>
                          <h2 className='heading-detail'>Song</h2>
                          <h2 className='heading-detail-singer'>Singer</h2>
                       </div>
                     </div>


                     <div className='playing-icon'>
                    <img src={playing} />
                  </div>


                  </div>






                  <div className='friend1'>


<div className='body'>
  <img className="img" src={friend1} />
  <div className='detail'>
     <h2 className='heading-detail-friend'>Name</h2>
     <h2 className='heading-detail'>Song</h2>
     <h2 className='heading-detail-singer'>Singer</h2>
  </div>
</div>


<div className='playing-icon'>
<img src={playing} />
</div>


</div>


               </div>
            <li>Atrist1</li>
            <li>Atrist1</li>
            </div>
        </div>
    )
}
export default Friends;