import { object, string } from 'zod';

export const changePasswordSchema = object({
	oldPassword: string().min(5),
	newPassword: string().min(5),
});
