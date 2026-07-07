import TextError from '@/shared/components/TextError';
import { useUserStore } from '@/shared/model/user.store';
import { registrationSchemaForm } from '@/shared/schemas/registration.schema';
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

const AuthRegistrationForm = () => {
	const form = useForm<z.infer<typeof registrationSchemaForm>>({
		defaultValues: {
			email: '',
			nickname: '',
			firstname: '',
			lastname: '',
			password: '',
			confirmedPassword: '',
		},
		resolver: zodResolver(registrationSchemaForm),
	});
	const [isNotEqualPassword, setIsNotEqualPassword] = useState<boolean>(false);
	const { signUp, error } = useUserStore();
	const navigate = useNavigate();

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof registrationSchemaForm>) {
		const { password, confirmedPassword } = form.getValues();

		if (password !== confirmedPassword) {
			setIsNotEqualPassword(true);
			return null;
		}

		navigate('/');
		setIsNotEqualPassword(false);
		signUp(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="grid grid-cols-2 gap-3">
					<FormField
						control={form.control}
						name="firstname"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-medium">First name</FormLabel>
								<FormControl>
									<Input placeholder="John" className="h-11" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastname"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-medium">Last name</FormLabel>
								<FormControl>
									<Input placeholder="Doe" className="h-11" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium">Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="john@example.com" className="h-11" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="nickname"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium">Nickname</FormLabel>
							<FormControl>
								<Input placeholder="johndoe" className="h-11" {...field} />
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
							<FormLabel className="text-sm font-medium">Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Create a password" className="h-11" {...field} />
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
							<FormLabel className="text-sm font-medium">Confirm password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Confirm your password"
									className="h-11"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isNotEqualPassword && <TextError>Passwords don't match</TextError>}
				{error && <TextError>{error}</TextError>}
				<Button type="submit" className="w-full h-11 text-base font-semibold">
					Sign up
				</Button>
				<p className="text-center text-sm text-muted-foreground">
					Already have an account?{' '}
					<Link
						to="/auth/sign-in"
						className="text-primary font-semibold hover:text-primary/80 transition-colors"
					>
						Sign in
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default AuthRegistrationForm;
