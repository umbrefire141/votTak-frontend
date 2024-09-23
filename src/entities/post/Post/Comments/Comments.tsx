import Comment from './Comment/Comment';
import CreateComment from './CreateComment/CreateComment';

const Comments = () => {
	return (
		<div className="border-t-2 p-5 flex flex-col gap-3">
			<h4 className="font-bold text-xl mb-5">Comments</h4>
			<CreateComment />
			<Comment />
		</div>
	);
};

export default Comments;
