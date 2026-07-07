import TextError from '@/shared/components/TextError';
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
import { toast } from 'sonner';
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
		toast('The login was successful');
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-medium">Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Enter your email" className="h-11" {...field} />
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
								<Input type="password" placeholder="Enter your password" className="h-11" {...field} />
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
					Sign in
				</Button>
				<p className="text-center text-sm text-muted-foreground">
					Don't have an account?{' '}
					<Link
						to="/auth/sign-up"
						className="text-primary font-semibold hover:text-primary/80 transition-colors"
					>
						Sign up
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default AuthLoginForm;
