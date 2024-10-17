import { useUserStore } from '@/shared/model/user.store';
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
		<div>
			<h3 className="text-xl font-medium mb-4">Update user</h3>
			<Form {...form}>
				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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
						name="nickname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nickname</FormLabel>
								<FormControl>
									<Input placeholder="Nickname" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="firstname"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Firstname</FormLabel>
								<FormControl>
									<Input placeholder="Firstname" {...field} />
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
								<FormLabel>Lastname</FormLabel>
								<FormControl>
									<Input placeholder="Lastname" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full">Update</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormUpdateUser;
