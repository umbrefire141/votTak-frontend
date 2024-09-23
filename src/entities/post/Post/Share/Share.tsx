import { AiOutlineLike } from 'react-icons/ai';

const Share = () => {
	return (
		<div className="cursor-pointer flex items-center gap-1 rounded-md p-1 ">
			<AiOutlineLike className="w-6 h-6" />
			<p className="text-lg">Share</p>
		</div>
	);
};

export default Share;
