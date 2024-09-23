import { Dispatch, SetStateAction } from 'react';
import { IImageUrl } from '../ImageUrl.interface';

export interface IAddImageComponent {
	setImages: Dispatch<SetStateAction<IImageUrl[]>>;
}
