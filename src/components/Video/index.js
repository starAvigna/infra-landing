import React from 'react'
import setVideo from './presentation_by_ariefputra_preview.mp4'
import './index.css'

const VideoBox = () => {
    
  return (
    <div className='video_wrapper mt-2 py-5'>
        <div className='container main_wrapper'>
            <div className='video_frame'>
            <video  className='video_bind' controls >
      <source src={setVideo}  type="video/mp4"/>
     </video>
         
            </div>
        </div>

    </div>
  )
}

export default VideoBox