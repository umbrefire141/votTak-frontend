import { formInfoUserSchema } from '@/shared/schemas/formInfoUser.schema';
import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';

export interface ISetCityComponent {
	field: ControllerRenderProps<z.infer<typeof formInfoUserSchema>>;
}
