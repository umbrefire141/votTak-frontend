export interface IChangePassword {
	oldPassword: string;
	newPassword: string;
}

export interface IUpdateUserInfo {
	currentCity?: string;
	hometown?: string;
	description?: string;
	occupation?: string;
	birth?: Date;
	languages: string[];
	favorite_games: string[];
	favorite_movies: string[];
	hobbies: string[];
}
