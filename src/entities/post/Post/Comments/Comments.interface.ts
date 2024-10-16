import { IComment } from '@/shared/types/Comment.interface';

export interface ICommentsProps {
	post_uuid: string;
	comments: IComment[];
}
