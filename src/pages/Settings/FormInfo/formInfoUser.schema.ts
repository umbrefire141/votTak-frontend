import { date, object, string } from 'zod';

export const formInfoUserSchema = object({
	languages: string().optional(),
	currentCity: string().optional(),
	hometown: string().optional(),
	description: string().optional(),
	favorite_movies: string().optional(),
	favorite_games: string().optional(),
	occupation: string().optional(),
	hobbies: string().optional(),
	birth: date().optional(),
});
