import { api } from '@/services/api';
import axios from 'axios';

interface ListUsersPagination {
	page?: number;
	perPage: number;
}

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

	listUsers: async ({ perPage, page }: ListUsersPagination) => {
		const request = await axios.get(
			`https://randomuser.me/api/?page=${
				page || 1
			}&results=${perPage}&seed=abc`,
		);

		return request.data;
	},
});
