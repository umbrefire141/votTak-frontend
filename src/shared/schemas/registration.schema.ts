import { object, string } from 'zod';

export const registrationSchemaForm = object({
	email: string().email().min(3),
	nickname: string().min(3),
	firstname: string().min(3),
	lastname: string().min(3),
	password: string().min(3),
	confirmedPassword: string().min(3),
}).required();
