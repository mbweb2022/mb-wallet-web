/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Dashed } from '../../globalStyles';
import './DividerStyle.css';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import es from '../../languages/es.json';
import { DownloadButton } from '../DownloadButton/DownloadButton';
import { MediaButton } from '../MediaButton/MediaButton';


const Divider = (
	{
		text,
		backgroundColor,
		textColor,
		paddingY = 10,
		//showButtons = false, 
		fontSize = 16,
		fontWeight = 'normal',
		text2,
		socialMedia = false,
		backgrandRadius = false,
		location = '',
		showDown = false,
		isDownload = false,
	}
) => {
	const dividerStyle = {
		padding: `${paddingY}px 20px`,
		width: '100%',
		backgroundColor: backgroundColor,
		color: textColor,
		fontSize: fontSize,
		textAlign: 'center',
		display: 'flex',
		flexDirection: text2 ? 'column' : 'row',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: fontWeight,

	};

	const [showDownState, setShowDownState] = useState(false);
	const downRef = useRef(null);

	return (
		<Dashed className='section_divider' style={dividerStyle}>
			{isDownload &&
				<DownloadButton
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/googlePlay.webp'}
					text={'GET IT ON'}
					title={'GOOGLE PLAY'}
					href={'https://play.google.com/store/apps/details?id=com.moneyblinks.WalletApp&	hl=es_419'}
				/>
			}
			{
				socialMedia && <MediaButton
					href={'https://www.tiktok.com/@moneyblinks.ec'}
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/tiktok.webp'} />
			}
			{
				socialMedia && <MediaButton
					href='https://www.facebook.com/profile.php?id=100082781024453'
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/facebook.webp'} />
			}
			{
				<Link style={{
					textDecoration: 'none',
					pointerEvents: location === '' ? 'none' : 'auto',
					cursor: location === '' ? 'default' : 'pointer',
				}} to={location}>
					<div className='divider__bgradius'>{text}</div>
				</Link>
			}
			{
				!backgrandRadius && text2 && (
					<div>
						<br />
						<p className='divider__text2' onClick={showDown ? () => setShowDownState(!showDownState) : () => { }} >{text2}</p>
					</div>
				)
			}
			{isDownload &&
				<DownloadButton
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/appleIcon.webp'}
					text={'GET IT ON'}
					title={'APPLE STORE'}
					href={'https://apps.apple.com/us/app/moneyblinks-wallet/id1590351645?l=es'}
				/>
			}

			{
				text2 && showDown && (
					<CSSTransition
						in={showDownState}
						nodeRef={downRef}
						timeout={300}
						classNames="alert"
						unmountOnExit
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: 20
							}}
						>
							<p
								ref={downRef}
								style={{
									width: '80%',
									color: 'white',
									textAlign: 'justify'
								}}
							>
								{es.FIRST_SHIPMENT_HOME}<br /><br />{es.HEALTH_INSURANCE_HOME}
							</p>
						</div>
					</CSSTransition>
				)
			}
			{
				socialMedia && <MediaButton
					href={'https://www.instagram.com/moneyblinks.ec/'}
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/insta.webp'} />
			}
			{
				socialMedia && <MediaButton
					href={'https://youtube.com/@moneyblinks9734'}
					imageUrl={'https://d3r4ipxr51o1re.cloudfront.net/youtube.webp'} />
			}
		</Dashed>
	);
};

Divider.propTypes = {
	text: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
};

export default Divider;