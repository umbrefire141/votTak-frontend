import { object, string } from 'zod';

export const loginFormSchema = object({
	email: string().email().min(3),
	password: string().min(3),
	confirmedPassword: string().min(3),
}).required();
