import { IFriend } from '@/shared/types/User.interface';
import axios from '@/shared/utils/axios';
import { IFriendsService } from './friends.interface';

const FRIENDS = 'friends';

class FriendsService implements IFriendsService {
	async getFriendsUser() {
		const { data: user } = await axios.get(`${FRIENDS}/get-friends`);
		return user;
	}

	async getFriend(uuid: string): Promise<IFriend> {
		const { data: user } = await axios.get(`${FRIENDS}/get-friendInfo/${uuid}`);
		return user;
	}

	async addFriend(uuid: string): Promise<void> {
		await axios.patch(`${FRIENDS}/add-friend`, { user_uuid: uuid });
	}

	async confirmFriend(id: number) {
		await axios.patch(`${FRIENDS}/confirm-friend/${+id}`);
	}

	async cancelFriend(id: number): Promise<void> {
		await axios.patch(`${FRIENDS}/cancel-friend/${+id}`);
	}

	async deleteFromFriend(id: number): Promise<void> {
		await axios.delete(`${FRIENDS}/remove-friend/${+id}`);
	}
}

export default new FriendsService();
