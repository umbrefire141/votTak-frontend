import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { updateUserSchema } from './updateUser.schema';

const FormUpdateUser = () => {
	const { user, updateUser } = useUserStore();

	const form = useForm<z.infer<typeof updateUserSchema>>({
		defaultValues: {
			email: user?.email,
			nickname: user?.nickname,
			firstname: user?.firstname,
			lastname: user?.lastname,
		},
		resolver: zodResolver(updateUserSchema),
	});

	async function onSubmit(values: z.infer<typeof updateUserSchema>) {
		updateUser(values);
	}

	return (
		<Card className="card-hover">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Update Profile</CardTitle>
				<CardDescription className="text-sm">
					Update your personal information
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="firstname"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium">First name</FormLabel>
										<FormControl>
											<Input placeholder="John" className="h-10" {...field} />
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
											<Input placeholder="Doe" className="h-10" {...field} />
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
										<Input type="email" placeholder="john@example.com" className="h-10" {...field} />
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
										<Input placeholder="johndoe" className="h-10" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full h-10">
							Save Changes
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default FormUpdateUser;
