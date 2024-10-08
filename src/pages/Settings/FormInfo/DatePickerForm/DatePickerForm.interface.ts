import { ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { formInfoUserSchema } from '../formInfoUser.schema';

export interface IDatePickerForm {
	field: ControllerRenderProps<z.infer<typeof formInfoUserSchema>>;
}
