

import React from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
//import { DefaultPlayer as Video } from 'react-html5video';
import ReactPlayer from 'react-player'

import "react-html5video/dist/styles.css"
export const Hug = () => {
  
  return (
    <Dashed className='hug__section'>
      {/* <Video autoPlay loop className="videoHug" poster="/assets/mbPoster.png">
        <source src='https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO.mp4' type='video/webm'></source>
      </Video> */}
      {/* <ReactPlayer url="https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO.mp4"/> */}
      <video  className="videoHug" autoPlay loop poster="/assets/mbPoster.png" controls>
      <source src='https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO.mp4' type='video/webm'></source>

      </video>
    </Dashed>
  )
}
