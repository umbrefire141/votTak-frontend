import { BiComment } from 'react-icons/bi';
import { ICommentComponent } from './Comment.interface';

const Comment = ({ comments }: ICommentComponent) => {
	return (
		<div className="cursor-pointer flex items-center gap-1 rounded-md p-1">
			<BiComment className="w-6 h-6" />
			<p className="text-lg">{comments}</p>
			<p className="text-base">Comments</p>
		</div>
	);
};

export default Comment;
