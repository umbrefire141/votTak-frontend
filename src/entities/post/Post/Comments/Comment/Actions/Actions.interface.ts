import { Dispatch, SetStateAction } from 'react';

export interface IActionsComponent {
	id: number;
	setIsEdit: Dispatch<SetStateAction<boolean>>;
}
