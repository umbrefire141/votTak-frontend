import { Dispatch, SetStateAction } from 'react';

export interface IUpdateButtonComponent {
	setIsEdit: Dispatch<SetStateAction<boolean>>;
}
