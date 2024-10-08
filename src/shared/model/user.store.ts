import { changeLanguageSchema } from '@/pages/Settings/FormChangeLanguage/changeLanguage.schema';
import { changePasswordSchema } from '@/pages/Settings/FormChangePassword/changePassword.schema';
import { formInfoUserSchema } from '@/pages/Settings/FormInfo/formInfoUser.schema';
import { updateUserSchema } from '@/pages/Settings/FormUpdateUser/updateUser.schema';
import authService from '@/shared/api/auth/auth.service';
import { loginFormSchema } from '@/shared/schemas/login.schema';
import { registrationSchemaForm } from '@/shared/schemas/registration.schema';
import { IUser } from '@/shared/types/User.interface';
import { z } from 'zod';
import { create } from 'zustand';
import { IUpdateUserInfo } from '../api/users/interface.interface';
import usersService from '../api/users/users.service';

interface UserState {
	user: IUser | null;
	error: string | null;
	loading: boolean;
	signIn: (data: z.infer<typeof loginFormSchema>) => void;
	signUp: (data: z.infer<typeof registrationSchemaForm>) => void;
	changePassword: (data: z.infer<typeof changePasswordSchema>) => void;
	changeLanguage: (data: z.infer<typeof changeLanguageSchema>) => void;
	updateUserInfo: (data: z.infer<typeof formInfoUserSchema>) => void;
	updateUser: (data: z.infer<typeof updateUserSchema>) => void;
	deleteAccount: () => void;
	logout: () => void;
	getMe: () => void;
}

export const useUserStore = create<UserState>(set => ({
	error: null,
	user: null,
	loading: false,
	signIn: async data => {
		set({ loading: true });
		try {
			const response = await authService.signIn(data);
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ loading: false, user: response });
		} catch (error) {
			set({ loading: false, user: null, error } as { error: string });
		}
	},
	signUp: async data => {
		set({ loading: true });
		try {
			const response = await authService.signUp(data);
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ loading: false, user: response });
		} catch (error) {
			set({ loading: false, error: error } as { error: string });
		}
	},
	changePassword: async data => {
		try {
			const response = await usersService.changePassword(data);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
	changeLanguage: async data => {
		try {
			const response = await usersService.changeLanguage(data);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
	updateUser: async data => {
		try {
			const response = await usersService.updateUser(data);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
	updateUserInfo: async data => {
		try {
			const obj: IUpdateUserInfo = {
				...data,
				birth: data?.birth,
				favorite_games: data?.favorite_games
					? data?.favorite_games.split(',')
					: [],
				favorite_movies: data?.favorite_movies
					? data?.favorite_movies.split(',')
					: [],
				languages: data?.languages ? data?.languages.split(',') : [],
				hobbies: data?.hobbies ? data?.hobbies.split(',') : [],
			};

			const response = await usersService.updateUserInfo(obj);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string });
		}
	},
	logout: async () => {
		await authService.logout();
		localStorage.removeItem('user_uuid');
		set({ user: null });
	},

	deleteAccount: async () => {
		await usersService.deleteAccount();
		localStorage.removeItem('user_uuid');
		set({ user: null });
	},

	getMe: async () => {
		set({ loading: true });
		try {
			const response = await authService.getMe();
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string }, false);
		} finally {
			set({ loading: false });
		}
	},
}));
