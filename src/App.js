import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import Divider from './components/Divider/Divider';
import { HomePage } from './pages/Home/HomePage';
import { BLUE_COLOR, TRACKING_ID } from './config';
import ReactGA from "react-ga";

import {
	Route,
	Routes,
} from "react-router-dom";

// PAGES
import { UsPage } from './pages/Us/UsPage';
import { FaqsPage } from './pages/Faqs/FaqsPage';
import { TermsPage } from './pages/Terms/TermsPage';
import Contact from './sections/Contact/Contact'
import { PrivacityPage } from './pages/Privacity/PrivacityPage';
import { WhyPage } from './pages/Why/WhyPage';
import { TutorialsPage } from './pages/Tutorials/TutorialsPage';
import { WhatsPage } from './pages/Whats/WhatsPage';
import { LicenciasPage } from './pages/LicenciasPage';

// const TRACKING_ID="G-LM561LWPEQ";
// ReactGA.initialize(TRACKING_ID);


function App() {
	useEffect(() => {
		ReactGA.initialize(TRACKING_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [])
	return (
		<>
			<GlobalStyle />
			<Navbar />

			<Routes>
				<Route path='/' exact element={<HomePage />} />
				<Route path='/faqs' element={<FaqsPage />} />
				<Route path='/why' element={<WhyPage />} />
				<Route path='/tutorials' element={<TutorialsPage />} />
				<Route path='/whats' element={<WhatsPage />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/us' element={<UsPage />} />

				<Route path='/terms' element={<TermsPage />} />
				<Route path='/privacy' element={<PrivacityPage />} />
				<Route path='/licenses' element={<LicenciasPage />} />
			</Routes>

			<Divider
				backgroundColor={BLUE_COLOR}
				text='DESCARGAS'
				textColor='white'
				paddingY={20}
				showButtons={true}
				fontWeight='bold'
			/>

			<Divider
				backgroundColor='white'
				text='SÍGUENOS'
				textColor={BLUE_COLOR}
				paddingY={20}
				showButtons={true}
				fontWeight='bold'
				socialMedia={true}
			/>

			<Footer />
		</>
	);
}

export default App;
