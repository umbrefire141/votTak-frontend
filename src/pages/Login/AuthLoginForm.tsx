import { useUserStore } from '@/shared/model/user.store';
import { loginFormSchema } from '@/shared/schemas/login.schema';
import { Button } from '@/shared/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const AuthLoginForm = () => {
	const form = useForm<z.infer<typeof loginFormSchema>>({
		defaultValues: {
			email: '',
			password: '',
			confirmedPassword: '',
		},
		resolver: zodResolver(loginFormSchema),
	});
	const [isNotEqualPassword, setIsNotEqualPassword] = useState<boolean>(false);
	const { signIn, error } = useUserStore();
	const navigate = useNavigate();

	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		const { password, confirmedPassword } = form.getValues();

		if (password !== confirmedPassword) {
			setIsNotEqualPassword(true);
			return null;
		}

		navigate('/');
		setIsNotEqualPassword(false);
		signIn(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmedPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="confirm password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isNotEqualPassword && (
					<p className="text-base font-medium text-destructive">
						Passwords don't match
					</p>
				)}
				{error && (
					<p className="text-base font-medium text-destructive">{error}</p>
				)}
				<Button type="submit" className="w-full max-w-28 mr-3">
					Sign in
				</Button>
				<Link
					to="/sign-up"
					className="text-blue-500 transition-colors hover:text-blue-700"
				>
					If you don't have an account, sign up
				</Link>
			</form>
		</Form>
	);
};

export default AuthLoginForm;
