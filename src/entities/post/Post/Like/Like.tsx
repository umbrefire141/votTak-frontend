import { AiOutlineLike } from 'react-icons/ai';
import { ILikeComponent } from './Like.interface';

const Like = ({ likes }: ILikeComponent) => {
	return (
		<div className="cursor-pointer flex items-center gap-1 rounded-md p-1 ">
			<AiOutlineLike className="w-6 h-6" />
			<p className="text-lg">{likes}</p>
			<p className="text-base">Likes</p>
		</div>
	);
};

export default Like;
