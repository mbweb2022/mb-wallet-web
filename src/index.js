import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);

