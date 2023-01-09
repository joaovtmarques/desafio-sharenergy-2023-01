import { createContext, useEffect, useState } from 'react';

import { Auth, AuthProviderProps, ContextProps } from '@/types';
import {
	getAuthLocalStorage,
	LoginRequest,
	RefreshToken,
	setAuthLocalStorage,
} from '@/utils/auth';

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [auth, setAuth] = useState<Auth | null>();

	const rToken = getAuthLocalStorage();

	function generate() {
		if (rToken) refreshToken(rToken);
	}

	useEffect(() => {
		generate();
	}, [rToken]);

	async function authenticate(
		username: string,
		password: string,
		rememberMe: boolean,
	) {
		const response = await LoginRequest(username, password);

		const payload = {
			token: response.token,
			refreshToken: {
				id: response.refreshToken.id,
				expiresIn: response.refreshToken.expiresIn,
			},
		};

		setAuth(payload.token);
		setAuthLocalStorage(payload.refreshToken.id);
		if (!rememberMe)
			window.onunload = () => {
				window.localStorage.clear();
			};
	}

	async function refreshToken(token: string) {
		const response = await RefreshToken(token);

		const payload = {
			token: response.token,
		};

		setAuth(payload);
	}

	async function logout() {
		setAuth(null);
		setAuthLocalStorage(null);
	}

	return (
		<AuthContext.Provider
			value={{
				...auth,
				authenticate,
				logout,
				refreshToken,
				getAuthLocalStorage,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
