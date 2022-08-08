
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause
 
} from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useState} from 'react'
import setVideo from './presentation_by_ariefputra_preview.mp4'
import './index.css'

const VideoBox = () => {
    const vidRef = useRef(null);
    const[icons ,setIcons] = useState(<FontAwesomeIcon icon={faPlay}/>)
    const[mode,setMode]=useState(false)
    const handlePauseVideo=()=>{
        vidRef.current.pause()
        setMode(false)
        setIcons(<FontAwesomeIcon icon={faPlay}/>)
    }
    const handlePlayVideo = () => {
      vidRef.current.play()
      setMode(true)
      setIcons(<FontAwesomeIcon icon={faPause}/>)
     
    }
  return (
    <div className='video_wrapper mt-2 py-5'>
        <div className='container main_wrapper'>
            <div className='video_frame'>
            <video ref={vidRef} className='video_bind' controls >
      <source src={setVideo}  type="video/mp4"/>
     </video>
           <div className='video_controller'>
            {mode?<button className='btn-play' onClick={handlePauseVideo}>{icons}</button>:<button className='btn-play' onClick={handlePlayVideo}>{icons}</button>}
            </div>
            </div>
        </div>

    </div>
  )
}

export default VideoBox