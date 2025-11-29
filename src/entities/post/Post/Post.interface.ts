import { IPost } from '@/shared/types/Post.interface';

export interface IPostComponent {
	post: IPost;
	repostedPost?: boolean;
}
