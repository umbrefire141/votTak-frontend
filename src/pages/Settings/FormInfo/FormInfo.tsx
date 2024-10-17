import { formInfoUserSchema } from '@/pages/Settings/FormInfo/formInfoUser.schema';
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
import DatePickerForm from './DatePickerForm/DatePickerForm';
import SetCity from './SetCity/SetCity';

const FormInfo = () => {
	const { updateUserInfo, user } = useUserStore();

	const form = useForm<z.infer<typeof formInfoUserSchema>>({
		defaultValues: {
			currentCity: user?.user_info?.currentCity
				? user?.user_info?.currentCity
				: '',
			hometown: user?.user_info?.hometown ? user?.user_info?.hometown : '',
			description: user?.user_info?.description
				? user?.user_info?.description
				: '',
			occupation: user?.user_info?.occupation
				? user?.user_info?.occupation
				: '',
			birth: user?.user_info?.birth
				? new Date(user?.user_info?.birth)
				: undefined,
			languages: user?.user_info?.languages
				? user?.user_info?.languages.join(',')
				: '',
			favorite_games: user?.user_info?.favorite_games
				? user?.user_info?.favorite_games.join(',')
				: '',
			favorite_movies: user?.user_info?.favorite_movies
				? user?.user_info?.favorite_movies.join(',')
				: '',
			hobbies: user?.user_info?.hobbies
				? user?.user_info?.hobbies.join(',')
				: '',
		},
		resolver: zodResolver(formInfoUserSchema),
	});

	const onSubmit = async (values: z.infer<typeof formInfoUserSchema>) => {
		updateUserInfo(values);
	};

	return (
		<div>
			<h3 className="text-xl font-medium mb-4">Change info</h3>
			<Form {...form}>
				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="currentCity"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="block">
									Choose city, where you live currently
								</FormLabel>
								<SetCity field={field} setValue={form.setValue} />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="hometown"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="block">
									Choose city, where you come from
								</FormLabel>
								<SetCity field={field} setValue={form.setValue} />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Description" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="occupation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>You're occupation</FormLabel>
								<FormControl>
									<Input placeholder="Occupation" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="favorite_games"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Favorite games</FormLabel>
								<FormControl>
									<Input placeholder="half-life,the witcher" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="favorite_movies"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Favorite movies</FormLabel>
								<FormControl>
									<Input placeholder="star wars,friends" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="hobbies"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Hobbies</FormLabel>
								<FormControl>
									<Input placeholder="programming,fishing" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="languages"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Languages</FormLabel>
								<FormControl>
									<Input placeholder="english,japanese" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="birth"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Birth</FormLabel>
								<FormControl>
									<DatePickerForm field={field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						Update
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormInfo;
