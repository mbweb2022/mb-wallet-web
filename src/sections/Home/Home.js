import React, {  useState} from 'react';
import './HomeStyle.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

export const Home3 = () => {
	const [mainIndex, setMainIndex] = useState(0);

	const items = [
		<div className="item" key="1">
			<img
				key="1"
				src="https://d3r4ipxr51o1re.cloudfront.net/PromotionalBlink.webp"
				className="media"
				alt="hug"
				width="1920"
				height="610"
			/>
		</div>,
		<div className="item" key="2">
			<img
				key="2"
				src="https://d3r4ipxr51o1re.cloudfront.net/PeopleHug.webp"
				className="media"
				alt="promo"
				width="1920"
				height="610"
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

			<div className="carousel" style={{width: window.innerWidth}}>
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
		</div>
	);
};
