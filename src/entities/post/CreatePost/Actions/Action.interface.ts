import { inputPostType } from '@/shared/api/posts.service';
import { IPost } from '@/shared/types/Post.interface';
import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult } from 'react-query';
import { IImageUrl } from '../ImageUrl.interface';

export interface IActionComponent {
	setImages: Dispatch<SetStateAction<IImageUrl[]>>;
	setIsOpenedEmojiPanel: Dispatch<SetStateAction<boolean>>;
	setValue: Dispatch<SetStateAction<string>>;
	submitData: () => void;
	mutation: UseMutationResult<IPost, unknown, inputPostType, unknown>;
	isOpenedEmojiPanel: boolean;
}
