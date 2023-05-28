

import React from 'react'
import { Dashed } from '../../globalStyles'
import './HugStyle.css';
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css"
export const Hug = () => {
  return (
    <Dashed className='hug__section'>
      <Video autoPlay loop className="videoHug">
        <source src='https://moneyblinkswallets3125742-pre.s3.us-east-1.amazonaws.com/VIDEO%20INSTITUCIONAL%205.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMSJHMEUCICppJATWSHg9Hrxec1yH1CRPiDGefZRWV0pdCxkbnUa0AiEApjxmEVYbb3k9GgEe1u31iF6tAwSeacnbVeXoqdVyFZ4q8AMIZxACGgw2NjQ1ODAxNTE4NDMiDIUDVZx69whvqxRiyyrNA5vWK7mt8sjCwTEoivfQhPc4XJEdb3mPBIAztAARN7nZexIgL0Y2Pdy11AsQoNFaPou4Mfc4Uo4lA5FeM%2FXyvZ65lpWPrASvkeBrp4J4IyZH5FDqsPhdhlRuabxzqQ4tBfEzPdL6cLrY7%2FB5xbp8%2By2Jfgu%2FI1d0WzQQja4ZN1EKhWb4G8eSzamLl6O%2FimZUza4d1K7ZoZv4M%2BukNE6Tocom%2BAGURD%2FxhZ7BJkAd0XxJS5P3Ob81eaQBgMqLgE9U1p7DqUAaS60qOjlaA6dP30C%2BV5mRPi2%2F%2BEPgCnidDnKm%2B%2FWFhBjVh7xs0Nae3uhtODZyEbQsBPe0SzqnrrobnS9qoJDN3tZulJIsYz%2Fm2q7YsNkkbrgamTDk1SB2YnFrJ8HJ4CPrYnTwwKEqkgzI7Q13PF7HQ%2FUL0P1gqelwE2uBmmsckW5szEX2OAqmXObM5nSc%2B2GDXoCcFLxu3fAagJDeZyhdLEb5hxJ5u7%2FEyVdZ4YWToZAXktBYx4MilwUgP3o6xz6o%2BkSPYM2gxpCjjw6214IEh2DbQ7VE6UYjupgHHbMgZHNN67te3amSZdpVUSnaadI2xQofELNl6Jp2ziT7wMrSg%2B8oEYd3zfO5MNCgz6MGOpQCQwu8wsu2ttFE9y3lcnfFiN7df1QvW96Jqy6H7p1EEOWrW9rwQRc2uM0sRktu0obGnNG4Kjl37rwVMoLySnBKQhV6ap2M7qzdasHCvX2fqO%2FP5hHNoP8LnlVqf9Xk57sCaUe73F5luNIemW%2FBj%2BlAwKO5cSMk7envYBR98wD2CNdH8UAvptOcAs2FadZIU%2FABq5LsK%2FYa3yMeScLIp3x2hsE1WO2QPgy8qdJg%2Bm2XYU%2Fsu6y1PFYsDnoqIssKEy4woTMfkw%2FlPbQ3P2X2HYeMUCyVBeLzgeAhHoWLAwi0VPLqRwt9y4y4BgHGWH16L9cUBsxDtwUDstbrLrYnA5h154mvyVidTURNhVBzDLqxY4BmJzVG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230528T220705Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAZVPAQLIRUPQBOGHH%2F20230528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d564e1c376c8e1e36c78345fd886a2332b27fa953ba722c447a040e22842d1e' type='video/webm'></source>
      </Video>
    </Dashed>
  )
}
