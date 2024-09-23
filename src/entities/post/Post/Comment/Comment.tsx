import { BiComment } from 'react-icons/bi';
import { ICommentComponent } from './Comment.interface';

const Comment = ({ comments, setIsShownComments }: ICommentComponent) => {
	return (
		<button
			className="cursor-pointer flex items-center gap-1 rounded-md p-1"
			onClick={() => setIsShownComments(true)}
		>
			<BiComment className="w-6 h-6" />
			<p className="text-lg">{comments}</p>
			<p className="text-base">Comments</p>
		</button>
	);
};

export default Comment;
