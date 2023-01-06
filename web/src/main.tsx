import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/main.css';

import { SignUp } from './pages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className="h-screen w-screen">
			<SignUp />
		</div>
	</React.StrictMode>,
);
