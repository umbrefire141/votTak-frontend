import { IChat } from './Chat.interface';
import { IComment } from './Comment.interface';
import { ILike } from './Like.interface';
import { INotification } from './Notification.interface';
import { IPhoto } from './Photo.interface';
import { IPost } from './Post.interface';
import { IShare } from './Share.interface';

export interface IUser {
	uuid: string;
	avatar?: IAvatar;
	email: string;
	nickname: string;
	firstname: string;
	language: string;
	lastname: string;
	user_info?: IUserInfo;
	created_at: Date;
	updated_at: Date;
	comments: IComment[];
	friends: IFriend[];
	likes: ILike[];
	posts: IPost[];
	photos: IPhoto[];
	shares: IShare[];
	chats: IChat[];
	notifications: INotification[];
}

export interface IFriend {
	id: number;
	user: IUser;
	userOf: IUser;
	confirmed: boolean;
}

export interface IAvatar {
	id: number;
	photo: IPhoto;
}

export interface IUserInfo {
	currentCity: string;
	hometown: string;
	description: string;
	birth: Date;
	occupation: string;
	favorite_movies: string[];
	favorite_games: string[];
	hobbies: string[];
	languages: string[];
}

export interface IUserWithPassword
	extends Pick<IUser, 'email' | 'nickname' | 'firstname' | 'lastname'> {
	password: string;
}
