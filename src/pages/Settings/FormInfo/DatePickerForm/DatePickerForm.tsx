import { DatePicker } from '@/shared/ui/data-picker';
import { IDatePickerForm } from './DatePickerForm.interface';

const DatePickerForm = ({ field }: IDatePickerForm) => {
	return (
		<div>
			<DatePicker
				value={field.value as Date | undefined}
				onChange={field.onChange}
			/>
		</div>
	);
};

export default DatePickerForm;
