import { array, object, string } from 'zod';

export const formInfoUserSchema = object({
	languages: array(string()),
	currentCity: string().min(5).optional(),
	hometown: string().min(5).optional(),
	description: string().min(5).optional(),
	favorite_movies: array(string()),
	favorite_games: array(string()),
	occupation: string().min(5).optional(),
	hobbies: array(string()),
});
