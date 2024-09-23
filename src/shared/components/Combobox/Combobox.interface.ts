import { Dispatch, SetStateAction } from 'react';

export interface IComboboxComponent {
	list: IListCommand[];
	name: string;
	selectedItemValue: string;
	setSelectedItemValue: Dispatch<SetStateAction<string>>;
	disabled?: boolean;
}

export interface IListCommand {
	value: string;
	label: string;
}
