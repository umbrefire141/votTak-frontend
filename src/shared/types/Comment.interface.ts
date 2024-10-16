import { IPhoto } from './Photo.interface';
import { IPost } from './Post.interface';
import { IUser } from './User.interface';

export interface IComment {
	id: number;
	message: string;
	post: IPost;
	author: IUser;
	photos: IPhoto[];
	created_at: Date;
	updated_at: Date;
}
