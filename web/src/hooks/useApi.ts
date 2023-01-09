import { api } from '@/services/api';

export const useApi = () => ({
	login: async (username: string, password: string) => {
		const request = await api.post('/login', { username, password });

		return request.data;
	},

	register: async (username: string, password: string) => {
		const request = await api.post('/users', { username, password });
	},

	refreshToken: async (rToken: string) => {
		const request = await api.post('/refresh-token', { refreshToken: rToken });

		return request.data;
	},
});
