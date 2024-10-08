import { object, string } from 'zod';

export const changeLanguageSchema = object({
	language: string(),
});
