import Comment from './Comment/Comment';
import { ICommentsProps } from './Comments.interface';
import CreateComment from './CreateComment/CreateComment';

const Comments = ({ post_uuid, comments }: ICommentsProps) => {
	return (
		<div className="border-t-2 p-5 flex flex-col gap-3">
			<h4 className="font-bold text-xl mb-5">Comments</h4>
			<CreateComment post_uuid={post_uuid} />
			{comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default Comments;
