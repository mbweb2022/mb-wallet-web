

import React, { useState } from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css"
import axios from "axios";
export const Hug = () => {
  const [urlVideo, setUrlVideo] = useState();
  const load = async () => {
    await axios.get("https://pastebin.com/gEs3irLb", {headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
    }})
        .then((response) => {
            const text = response.data;
            console.log(text);
            setUrlVideo(text)
          
        })
        .catch(error => console.log(error));
    
}
load();
  return (
    <Dashed className='hug__section'>
      <Video autoPlay loop className="videoHug">
        <source src={urlVideo} type='video/webm'></source>
      </Video>
    </Dashed>
  )
}
