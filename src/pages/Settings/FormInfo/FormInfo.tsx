import { formInfoUserSchema } from '@/shared/schemas/formInfoUser.schema';
import { Form, FormField } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import SetCity from './SetCity/SetCity';

const FormInfo = () => {
	const form = useForm<z.infer<typeof formInfoUserSchema>>({
		defaultValues: {
			currentCity: '',
			description: '',
			favorite_games: [],
			favorite_movies: [],
			hobbies: [],
			hometown: '',
			languages: [],
			occupation: '',
		},
		resolver: zodResolver(formInfoUserSchema),
	});

	const onSubmit = async (values: z.infer<typeof formInfoUserSchema>) => {
		console.log(values);
	};

	return (
		<div>
			<h3>Change info</h3>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="currentCity"
						render={({ field }) => <SetCity field={field} />}
					/>
				</form>
			</Form>
		</div>
	);
};

export default FormInfo;
