

import React from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css"
export const Hug = () => {
  
  return (
    <Dashed className='hug__section'>
      <Video autoPlay loop className="videoHug">
        <source src='https://moneyblinkswallets3125742-pre.s3.amazonaws.com/VIDEO+INSTITUCIONAL+5.mp4' type='video/webm'></source>
      </Video>
    </Dashed>
  )
}
