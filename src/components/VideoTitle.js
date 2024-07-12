import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='browes-title-container'>
      <div className='browes-content'>
        <div className='browes-trailer'>
          <h1 className='trailer-name'>{title}</h1>
          <p className='about-trailer'>{overview}</p>
        </div>
        <div className='browes-button'>
            <button className='play-btn'><FontAwesomeIcon icon={faPlay} /> Play</button>
            <button className='info-btn'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle