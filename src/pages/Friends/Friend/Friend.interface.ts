import { IFriend } from '@/shared/types/User.interface';

export interface IFriendComponent {
	friend: IFriend;
	getFriends: () => void;
}
