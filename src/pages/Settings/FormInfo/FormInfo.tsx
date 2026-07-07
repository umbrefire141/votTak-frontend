import { formInfoUserSchema } from '@/pages/Settings/FormInfo/formInfoUser.schema';
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
		<Card className="card-hover">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Personal Info</CardTitle>
				<CardDescription className="text-sm">
					Share some information about yourself
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="currentCity"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-medium">Current City</FormLabel>
								<SetCity field={field} setValue={form.setValue} />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="hometown"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm font-medium">Hometown</FormLabel>
								<SetCity field={field} setValue={form.setValue} />
							</FormItem>
						)}
					/>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="occupation"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium">Occupation</FormLabel>
										<FormControl>
											<Input placeholder="Software Engineer" className="h-10" {...field} />
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
										<FormLabel className="text-sm font-medium">Birth</FormLabel>
										<FormControl>
											<DatePickerForm field={field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-sm font-medium">Description</FormLabel>
									<FormControl>
										<Input placeholder="Tell us about yourself" className="h-10" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="languages"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium">Languages</FormLabel>
										<FormControl>
											<Input placeholder="english, japanese" className="h-10" {...field} />
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
										<FormLabel className="text-sm font-medium">Hobbies</FormLabel>
										<FormControl>
											<Input placeholder="programming, fishing" className="h-10" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="favorite_games"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium">Favorite Games</FormLabel>
										<FormControl>
											<Input placeholder="half-life, the witcher" className="h-10" {...field} />
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
										<FormLabel className="text-sm font-medium">Favorite Movies</FormLabel>
										<FormControl>
											<Input placeholder="star wars, friends" className="h-10" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" className="w-full h-10">
							Save Info
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default FormInfo;
