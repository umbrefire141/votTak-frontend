import authService from '@/shared/api/auth/auth.service';
import { loginFormSchema } from '@/shared/schemas/login.schema';
import { registrationSchemaForm } from '@/shared/schemas/registration.schema';
import { IUser } from '@/shared/types/User.interface';
import { z } from 'zod';
import { create } from 'zustand';

interface UserState {
	user: IUser | null;
	error: string | null;
	loading: boolean;
	signIn: (data: z.infer<typeof loginFormSchema>) => void;
	signUp: (data: z.infer<typeof registrationSchemaForm>) => void;
	logout: () => void;
	getMe: () => void;
}

export const useUserStore = create<UserState>(set => ({
	error: null,
	user: {
		uuid: 'eataest',
		firstname: 'Matvey',
		lastname: 'Aksentev',
		nickname: 'mioop75',
		email: 'matvejaksentev80@gmail.com',
		info: {
			birth: '7 january',
			city: 'Novosibirsk',
			hometown: 'Novosibirks',
			languages: ['Japanese', 'Russian', 'English'],
		},
		chats: [],
		comments: [],
		friends: [],
		likes: [],
		notifications: [],
		photos: [],
		posts: [],
		shares: [],
		created_at: new Date(),
		updated_at: new Date(),
	},
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
	logout: async () => {
		await authService.logout();
		localStorage.removeItem('user_uuid');
		set({ user: null });
	},
	getMe: async () => {
		set({ loading: true });
		try {
			const response = await authService.getMe();
			localStorage.setItem('user_uuid', response?.uuid as string);
			set({ loading: false, user: response });
		} catch (error) {
			set({ loading: false, error: error } as { error: string });
		}
	},
}));
