import { Dispatch, SetStateAction } from 'react';

export interface IActionsComponent {
	uuid: string;
	setIsEdit: Dispatch<SetStateAction<boolean>>;
}
