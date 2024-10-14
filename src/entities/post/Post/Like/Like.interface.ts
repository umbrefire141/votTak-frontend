import { ILike } from '@/shared/types/Like.interface';

export interface ILikeComponent {
	uuid: string;
	likes: ILike[];
}
