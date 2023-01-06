import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/main.css';

import { Login } from './pages/Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<div className="h-screen w-screen">
			<Login />
		</div>
	</React.StrictMode>,
);
