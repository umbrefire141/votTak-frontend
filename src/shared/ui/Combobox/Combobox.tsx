import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/shared/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { IComboboxComponent } from './Combobox.interface';

const Combobox = ({
	list,
	name,
	selectedItemValue,
	setSelectedItemValue,
	disabled = false,
}: IComboboxComponent) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(selectedItemValue);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? list.find(item => item.value === value)?.label
						: `Select ${name}...`}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={`Search ${name}...`} />
					<CommandList>
						<CommandEmpty>No {name} found.</CommandEmpty>
						<CommandGroup>
							{list.map(item => (
								<CommandItem
									key={item.value}
									value={item.value}
									disabled={disabled}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue);
										setSelectedItemValue(
											currentValue === value ? '' : currentValue
										);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === item.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{item.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default Combobox;
