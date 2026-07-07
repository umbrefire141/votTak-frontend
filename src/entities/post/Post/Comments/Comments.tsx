import Comment from './Comment/Comment';
import { ICommentsProps } from './Comments.interface';
import CreateComment from './CreateComment/CreateComment';

const Comments = ({ post_uuid, comments }: ICommentsProps) => {
	return (
		<div className="border-t border-border/50 px-5 py-4 flex flex-col gap-4 bg-muted/20 rounded-b-xl">
			<h4 className="font-semibold text-sm text-muted-foreground">
				Comments ({comments.length})
			</h4>
			<CreateComment post_uuid={post_uuid} />
			{comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default Comments;
