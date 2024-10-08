import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { changeLanguageSchema } from './changeLanguage.schema';

const FormChangeLanguage = () => {
	const { changeLanguage, user } = useUserStore();

	const form = useForm<z.infer<typeof changeLanguageSchema>>({
		defaultValues: {
			language: user?.language,
		},
		resolver: zodResolver(changeLanguageSchema),
	});

	const onSubmit = (data: z.infer<typeof changeLanguageSchema>) => {
		changeLanguage(data);
	};

	return (
		<div>
			<h3 className="text-xl font-medium mb-4">Change language</h3>
			<Form {...form}>
				<form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="language"
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Language" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="rus">Russian</SelectItem>
										<SelectItem value="eng">English</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<Button className="w-full">Change</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormChangeLanguage;
