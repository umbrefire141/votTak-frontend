import { IPhoto } from '@/shared/types/Photo.interface';
import { Dispatch, SetStateAction } from 'react';

export interface IImagesProps {
	images: IPhoto[];
	setImages: Dispatch<SetStateAction<IPhoto[]>>;
	isEdit?: boolean;
}
