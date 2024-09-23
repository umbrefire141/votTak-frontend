import { IUser } from '@/shared/types/User.interface';
import axios from '@/shared/utils/axios';

interface IUsersService {
	getUsers(): Promise<IUser[]>;
	getUser(uuid: string): Promise<IUser>;
	addFriend(uuid: string): Promise<void>;
	setAvatar(file: FormData): Promise<void>;
}

export const USERS = 'users';

class UsersService implements IUsersService {
	async getUsers(): Promise<IUser[]> {
		const { data: users } = await axios.get(USERS);

		return users;
	}

	async getUser(uuid: string): Promise<IUser> {
		const { data: user } = await axios.get(`${USERS}/${uuid}`);
		return user;
	}

	async addFriend(uuid: string): Promise<void> {
		await axios.patch(`${USERS}/add-friend`, { user_uuid: uuid });
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
