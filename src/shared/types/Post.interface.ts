import { IComment } from './Comment.interface';
import { ILike } from './Like.interface';
import { IPhoto } from './Photo.interface';
import { IShare } from './Share.interface';
import { IUser } from './User.interface';

export interface IPost {
	uuid: string;
	content: string;
	hidden: boolean;
	comments: IComment[];
	likes: ILike[];
	photos: IPhoto[];
	shares: IShare[];
	author: IUser;
	created_at: Date;
	updated_at: Date;
}
