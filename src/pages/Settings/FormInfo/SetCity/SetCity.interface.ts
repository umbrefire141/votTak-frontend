import { formInfoUserSchema } from '@/pages/Settings/FormInfo/formInfoUser.schema';
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form';
import { z } from 'zod';

export interface ISetCityComponent {
	field: ControllerRenderProps<z.infer<typeof formInfoUserSchema>>;
	setValue: UseFormSetValue<{
		languages?: string;
		favorite_movies?: string;
		favorite_games?: string;
		hobbies?: string;
		currentCity?: string | undefined;
		hometown?: string | undefined;
		description?: string | undefined;
		occupation?: string | undefined;
	}>;
}
