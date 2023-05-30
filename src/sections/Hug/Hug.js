

import React from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
//import { DefaultPlayer as Video } from 'react-html5video';


import "react-html5video/dist/styles.css"
export const Hug = () => {
  
  return (
    <Dashed className='hug__section'>
      <iframe className='videoHug'  
      src="https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO.mp4" 
      title="Brand Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
    </Dashed>
  )
}
