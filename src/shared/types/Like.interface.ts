import { IPost } from './Post.interface';
import { IUser } from './User.interface';

export interface ILike {
	id: number;
	post: IPost;
	user: IUser;
}
