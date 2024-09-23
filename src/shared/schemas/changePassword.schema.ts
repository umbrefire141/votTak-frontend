import { object, string } from 'zod';

export const changePasswordSchema = object({
	currentPassword: string().min(5),
	newPassword: string().min(5),
});
