import { IAvatar, IUserInfo } from '@/shared/types/User.interface';

export interface IInfoComponent {
	uuid: string;
	avatar?: IAvatar;
	email: string;
	firstname: string;
	lastname: string;
	info?: IUserInfo;
	friendsCount: number;
	photosCount: number;
}
