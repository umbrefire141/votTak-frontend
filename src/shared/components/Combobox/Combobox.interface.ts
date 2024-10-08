import { Dispatch, SetStateAction } from 'react';

export interface IComboboxComponent {
	list: IListCommand[];
	name: string;
	selectedItemValue: string;
	setSelectedItemValue: Dispatch<SetStateAction<string>>;
	formName?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setFormValue?: any;
	disabled?: boolean;
}

export interface IListCommand {
	value: string;
	label: string;
}
