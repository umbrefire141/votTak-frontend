import TextError from '@/shared/components/TextError.tsx';
import { useUserStore } from '@/shared/model/user.store.ts';
import { Button } from '@/shared/ui/button.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
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
		<Card className="card-hover">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Change Password</CardTitle>
				<CardDescription className="text-sm">
					Update your password to keep your account secure
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="oldPassword"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="password"
											placeholder="Current password"
											className="h-10"
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
											className="h-10"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isNotEqualPassword && <TextError>Passwords don't match</TextError>}
						{error && <TextError>{error}</TextError>}
						<Button className="w-full h-10" type="submit">
							Update Password
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default FormChangePassword;
