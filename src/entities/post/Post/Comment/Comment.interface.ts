import { Dispatch, SetStateAction } from 'react';

export interface ICommentComponent {
	comments: number;
	setIsShownComments: Dispatch<SetStateAction<boolean>>;
}
