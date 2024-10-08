import { changeLanguageSchema } from '@/pages/Settings/FormChangeLanguage/changeLanguage.schema';
import { updateUserSchema } from '@/pages/Settings/FormUpdateUser/updateUser.schema';
import { IUser } from '@/shared/types/User.interface';
import axios from '@/shared/utils/axios';
import { z } from 'zod';
import { IChangePassword, IUpdateUserInfo } from './interface.interface';

interface IUsersService {
	getUsers(): Promise<IUser[]>;
	getUser(uuid: string): Promise<IUser>;
	addFriend(uuid: string): Promise<void>;
	changePassword(dto: IChangePassword): Promise<IUser>;
	changeLanguage(dto: z.infer<typeof changeLanguageSchema>): Promise<IUser>;
	updateUserInfo(dto: IUpdateUserInfo): Promise<IUser>;
	updateUser(dto: z.infer<typeof updateUserSchema>): Promise<IUser>;
	deleteAccount(): Promise<void>;
	setAvatar(file: FormData): Promise<void>;
}

export const USERS = 'users';

class UsersService implements IUsersService {
	async getUsers(): Promise<IUser[]> {
		const { data: users } = await axios.get(USERS);

		return users;
	}

	async getUser(uuid: string): Promise<IUser> {
		const { data: user } = await axios.get(`${USERS}/one/${uuid}`);
		return user;
	}

	async getFriendUsers() {
		const { data: user } = await axios.get(`${USERS}/get-friends`);
		return user;
	}

	async updateUser(dto: z.infer<typeof updateUserSchema>): Promise<IUser> {
		try {
			const { data } = await axios.put(`${USERS}`, dto);

			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async updateUserInfo(dto: IUpdateUserInfo): Promise<IUser> {
		try {
			const { data } = await axios.patch(`${USERS}/user-info`, dto);

			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async addFriend(uuid: string): Promise<void> {
		await axios.patch(`${USERS}/add-friend`, { user_uuid: uuid });
	}

	async confirmFriend(id: number) {
		await axios.patch(`${USERS}/confirm-friend/${id}`);
	}

	async changePassword(dto: IChangePassword): Promise<IUser> {
		try {
			const { data } = await axios.patch(`${USERS}/change-password`, dto);

			return data;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async changeLanguage(
		dto: z.infer<typeof changeLanguageSchema>
	): Promise<IUser> {
		try {
			const { data } = await axios.patch(`${USERS}/change-language`, dto);

			return data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async deleteAccount(): Promise<void> {
		return await axios.delete(`${USERS}`);
	}

	async setAvatar(file: FormData): Promise<void> {
		await axios.patch(`${USERS}/update-avatar`, file, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	}
}

export default new UsersService();
