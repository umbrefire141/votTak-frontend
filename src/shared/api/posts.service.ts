import { IPost } from '@/shared/types/Post.interface';
import axios from '@/shared/utils/axios';

export interface inputPostType extends Pick<IPost, 'content' | 'hidden'> {
	photoIds: number[];
}

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
	likePost(uuid: string): Promise<IPost>;
	unlikePost(uuid: string): Promise<IPost>;
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async uploadImage(img: any) {
		const formData = new FormData();
		formData.append('image', img);

		const { data } = await axios.post(`${POSTS}/upload-image`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return data;
	}

	async deletePost(uuid: string): Promise<void> {
		await axios.delete(`${POSTS}/${uuid}`);
	}

	async likePost(uuid: string): Promise<IPost> {
		const { data: post } = await axios.patch(`${POSTS}/like/${uuid}`);
		return post;
	}

	async unlikePost(uuid: string): Promise<IPost> {
		const { data: post } = await axios.patch(`${POSTS}/unlike/${uuid}`);
		return post;
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
