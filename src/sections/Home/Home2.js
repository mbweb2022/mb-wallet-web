import React from 'react'
import './HomeStyle.css'
import { Carousel } from 'react-carousel-minimal';

export const Home = () => {
  const data = [
    {
      image: "https://d3r4ipxr51o1re.cloudfront.net/promo.jpg",
      caption: ""
    },
    {
      image: "https://d3r4ipxr51o1re.cloudfront.net/hug.jpg",
      caption: ""
    },
    {
      image: "https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO.mp4",
      caption: ""
    }
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div style={{
      padding: "0 20px"
    }}>
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="600px"
        captionStyle={captionStyle}
       slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "600px"
                }}
      />
    </div>
  )
}
