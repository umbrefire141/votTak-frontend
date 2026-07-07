import { FiShare2 } from 'react-icons/fi';

const Share = () => {
	return (
		<button className="cursor-pointer flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all duration-200 hover:bg-accent active:scale-95 text-muted-foreground hover:text-foreground">
			<FiShare2 className="w-4 h-4" />
			<span className="text-sm font-medium">Share</span>
		</button>
	);
};

export default Share;
