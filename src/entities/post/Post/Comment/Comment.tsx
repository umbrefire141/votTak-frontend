import { BiComment } from 'react-icons/bi';
import { ICommentComponent } from './Comment.interface';

const Comment = ({ comments, setIsShownComments }: ICommentComponent) => {
	return (
		<button
			className="cursor-pointer flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all duration-200 hover:bg-accent active:scale-95 text-muted-foreground hover:text-foreground"
			onClick={() => setIsShownComments(true)}
		>
			<BiComment className="w-5 h-5" />
			<span className="text-sm font-medium">{comments}</span>
		</button>
	);
};

export default Comment;
