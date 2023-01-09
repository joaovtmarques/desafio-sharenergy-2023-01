import { Auth } from '@/types';
import { api } from '@/services/api';

export function setAuthLocalStorage(refreshToken: string | null) {
	localStorage.setItem('token', JSON.stringify(refreshToken));
}

export function getAuthLocalStorage() {
	const json = localStorage.getItem('token');

	if (!json) return null;

	const auth = JSON.parse(json);

	return auth ?? null;
}

export async function LoginRequest(email: string, password: string) {
	try {
		const request = await api.post('/login', { email, password });

		return request.data;
	} catch (err) {
		return null;
	}
}

export async function RefreshToken(refreshToken: string) {
	try {
		const request = await api.post('/refresh-token', {
			refreshToken: refreshToken,
		});

		return request.data;
	} catch (err) {
		return null;
	}
}
