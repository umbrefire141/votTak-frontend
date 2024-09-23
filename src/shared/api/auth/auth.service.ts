import { IUser, IUserWithPassword } from '@/shared/types/User.interface';
import axios from '@/shared/utils/axios';
import { IAuth } from './auth.interface';

export const AUTH = 'auth';

type AuthServiceResponse = IUser | null;

interface AuthServiceInterface {
	signUp(data: IUserWithPassword): Promise<AuthServiceResponse>;
	signIn(data: IAuth): Promise<AuthServiceResponse>;
	logout(): void;
	getMe(): Promise<AuthServiceResponse>;
}

class AuthService implements AuthServiceInterface {
	async signUp(data: IUserWithPassword): Promise<AuthServiceResponse> {
		try {
			const user = await axios.post(`${AUTH}/sign-up`, data);

			if (user.status >= 400) {
				return null;
			}

			return user.data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async signIn(data: IAuth): Promise<AuthServiceResponse> {
		try {
			const user = await axios.post(`${AUTH}/sign-in`, data);

			return user.data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async logout(): Promise<void> {
		await axios.get(`${AUTH}/logout`);
	}

	async getMe(): Promise<AuthServiceResponse> {
		try {
			const user = await axios.get(`${AUTH}/me`);

			if (user.status >= 400) {
				return null;
			}

			return user.data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}
}

export default new AuthService();
