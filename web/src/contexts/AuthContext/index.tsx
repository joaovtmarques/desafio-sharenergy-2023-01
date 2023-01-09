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
	const [auth, setAuth] = useState<Auth | undefined | null>();

	useEffect(() => {
		const auth = getAuthLocalStorage();

		if (auth) refreshToken(auth);
	}, []);

	async function authenticate(email: string, password: string) {
		const response = await LoginRequest(email, password);

		const payload = {
			token: response.token,
			refreshToken: {
				id: response.refreshToken.id,
				expiresIn: response.refreshToken.expiresIn,
			},
		};

		setAuth(payload);
		setAuthLocalStorage(payload.refreshToken.id);
	}

	async function refreshToken(token: string) {
		const response = await RefreshToken(token);

		setAuth(response.token);
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
