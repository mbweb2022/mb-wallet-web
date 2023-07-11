import React, {  useState, useCallback } from "react";
import "./HomeStyle.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export const Home3 = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);  

  const handleVideoEnd = () => {
    console.log("Entra a Handle video:");
    setVideoEnded(true);
    toggleVideo();
  };
  const toggleVideo = useCallback(() => {
    console.log("ShowVideo:",!showVideo);
    setVideoEnded(true);
    setShowVideo(!showVideo);
  },[showVideo]);


  const items = [
    <div className="item">
      <img
      key="1"
        src="https://d3r4ipxr51o1re.cloudfront.net/PeopleHug.jpg"
        className="media"
        alt="hug"
      />
    </div>,
    <div className="item">
      <img
        key="2"
        src="https://d3r4ipxr51o1re.cloudfront.net/PromotionBlink.jpg"
        className="media"
        alt="promo"
      />
    </div>,
  ];

  
  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
    if (mainIndex === 2) {
      setMainIndex(0);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
    if (mainIndex === 0) {
      setMainIndex(items.length);
    }
  };

  return (
    <div >
   
      {showVideo && !videoEnded ? (
        // <iframe
        // src="https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO_2.mp4"
        //   width="50%"
        //   className="videoHug"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
        //   allowFullScreen
        //   title="Video"
        //   autoPlay
        //   onEnded={()=>handleVideoEnd()}
        ///>
        <div className="carouselVideo">
        <video autoPlay="autoplay" controls muted className='videoHug' onEnded={()=>handleVideoEnd()}>
            <source src="https://d3r4ipxr51o1re.cloudfront.net/BRAND_VIDEO_2.mp4" type="video/mp4"/>
            </video> 
         </div>   
      ) : (
        <div className="carousel">
         <AliceCarousel
          activeIndex={mainIndex}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3500}
          animationDuration={3500}
          animationType="slide"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
        <div className="btn-prev" onClick={slidePrev}>
          &lang;
        </div>
        <div className="btn-next" onClick={slideNext}>
          &rang;
        </div>
        </div>
      )}
    
    </div>
  );
};
