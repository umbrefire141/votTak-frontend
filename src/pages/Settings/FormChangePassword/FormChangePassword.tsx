import TextError from '@/shared/components/TextError.tsx';
import { useUserStore } from '@/shared/model/user.store.ts';
import { Button } from '@/shared/ui/button.tsx';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { changePasswordSchema } from './changePassword.schema.ts';

const FormChangePassword = () => {
	const [isNotEqualPassword, setIsNotEqualPassword] = useState<boolean>(false);
	const { changePassword, error } = useUserStore();

	const form = useForm<z.infer<typeof changePasswordSchema>>({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
		},
		resolver: zodResolver(changePasswordSchema),
	});

	const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
		const oldPassword = values.oldPassword;
		const newPassword = values.newPassword;

		if (oldPassword !== newPassword) {
			setIsNotEqualPassword(true);
			return null;
		}

		setIsNotEqualPassword(false);
		changePassword(values);
	};

	return (
		<div>
			<h3 className="text-xl font-medium mb-4">Change password</h3>
			<Form {...form}>
				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="oldPassword"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="password"
										placeholder="Old password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="password"
										placeholder="New password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{isNotEqualPassword && <TextError>Passwords don't match</TextError>}
					{error && <TextError>{error}</TextError>}
					<Button className="w-full" type="submit">
						Update
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormChangePassword;
