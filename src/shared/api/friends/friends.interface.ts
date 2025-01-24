import { IFriend } from '@/shared/types/User.interface';

export interface IFriendsService {
	getFriendsUser(): Promise<IFriend[]>;
	getFriend(uuid: string): Promise<IFriend>;
	confirmFriend(id: number): Promise<void>;
	cancelFriend(id: number): Promise<void>;
	addFriend(uuid: string): Promise<void>;
	deleteFromFriend(id: number): Promise<void>;
}
