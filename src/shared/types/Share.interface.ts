import { IPhoto } from './Photo.interface';
import { IPost } from './Post.interface';
import { IUser } from './User.interface';

export interface IShare {
	id: number;
	comment?: string;
	photos: IPhoto[];
	post: IPost;
	user: IUser;
}
