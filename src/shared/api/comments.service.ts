import { IComment } from '../types/Comment.interface';
import axios from '../utils/axios';

interface ICommentsService {
	createComment: (
		post_uuid: string,
		dto: Pick<IComment, 'message'>
	) => Promise<void>;
	updateComment: (id: number, dto: Pick<IComment, 'message'>) => Promise<void>;
	deleteComment: (id: number) => Promise<void>;
}

const COMMENTS = 'comments';

class CommentsService implements ICommentsService {
	async createComment(
		post_uuid: string,
		dto: Pick<IComment, 'message'>
	): Promise<void> {
		return await axios.post(COMMENTS, {
			post_uuid,
			message: dto.message,
		});
	}

	async deleteComment(id: number): Promise<void> {
		return await axios.delete(`${COMMENTS}/${id}`);
	}

	async updateComment(
		id: number,
		dto: Pick<IComment, 'message'>
	): Promise<void> {
		return await axios.put(`${COMMENTS}/${id}`, {
			message: dto.message,
		});
	}
}

export default new CommentsService();
