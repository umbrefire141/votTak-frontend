import { Dispatch, SetStateAction } from 'react';
import { IImageUrl } from '../ImageUrl.interface';

export interface IImagesComponent {
	images: IImageUrl[];
	setImages: Dispatch<SetStateAction<IImageUrl[]>>;
}
