import { IPost } from '@/shared/types/Post.interface';
import axios from '@/shared/utils/axios';

export type inputPostType = Pick<IPost, 'content' | 'hidden'>;

export interface PaginationWithPosts {
	total: number;
	page: 0;
	size: 50;
	posts: IPost[];
}

interface IPostsService {
	getAllPosts(): Promise<PaginationWithPosts>;
	getPost(uuid: string): Promise<IPost>;
	createPost(data: inputPostType): Promise<IPost>;
	updatePost(uuid: string, data: inputPostType): Promise<IPost>;
	deletePost(uuid: string): Promise<void>;
	hidePost(uuid: string): Promise<IPost>;
	unhidePost(uuid: string): Promise<IPost>;
}

const POSTS = 'posts';

class PostsService implements IPostsService {
	async getAllPosts(): Promise<PaginationWithPosts> {
		const { data: posts } = await axios.get(
			`${POSTS}?page=0&limit=50&offset=0&size=50`
		);

		return posts;
	}

	async getPost(uuid: string): Promise<IPost> {
		const { data: post } = await axios.get(`${POSTS}/${uuid}`);

		return post;
	}

	async createPost(data: inputPostType): Promise<IPost> {
		const { data: post } = await axios.post(POSTS, data);
		return post;
	}

	async updatePost(uuid: string, data: inputPostType): Promise<IPost> {
		const { data: updatedPost } = await axios.put(`${POSTS}/${uuid}`, data);

		return updatedPost;
	}

	async deletePost(uuid: string): Promise<void> {
		await axios.delete(`${POSTS}/${uuid}`);
	}

	async hidePost(uuid: string): Promise<IPost> {
		const { data: post } = await axios.patch(`${POSTS}/hide/${uuid}`);
		return post;
	}

	async unhidePost(uuid: string): Promise<IPost> {
		const { data: post } = await axios.patch(`${POSTS}/unhide/${uuid}`);
		return post;
	}
}

export default new PostsService();
