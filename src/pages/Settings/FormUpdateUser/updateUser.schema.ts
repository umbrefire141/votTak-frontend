import { object, string } from 'zod';

export const updateUserSchema = object({
	email: string().min(5),
	nickname: string().min(5),
	firstname: string(),
	lastname: string(),
});
