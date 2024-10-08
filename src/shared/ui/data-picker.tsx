import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { useEffect, useState } from 'react';

type DatePickerTypes = {
	value?: Date;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: any;
};

export function DatePicker({ value, onChange }: DatePickerTypes) {
	const [date, setDate] = useState<Date>();

	useEffect(() => {
		if (value) setDate(value);
	}, [value]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-[280px] justify-start text-left font-normal',
						!value && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value ? format(value, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={onChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
