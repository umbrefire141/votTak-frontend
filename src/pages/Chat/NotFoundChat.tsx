import { BiChat } from 'react-icons/bi';

const NotFoundChat = () => {
	return (
		<div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
			<div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
				<BiChat className="w-8 h-8" />
			</div>
			<p className="text-sm font-medium">Select a conversation</p>
			<p className="text-xs">Choose a chat to start messaging</p>
		</div>
	);
};

export default NotFoundChat;
