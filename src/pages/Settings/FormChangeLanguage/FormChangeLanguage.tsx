import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
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
		<Card className="card-hover">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Language</CardTitle>
				<CardDescription className="text-sm">
					Choose your preferred language
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
											<SelectTrigger className="h-10">
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
						<Button type="submit" className="w-full h-10">
							Change Language
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default FormChangeLanguage;
