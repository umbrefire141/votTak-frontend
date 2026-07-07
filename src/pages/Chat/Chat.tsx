import Search from '@/shared/components/Search/Search';
import { useSocket } from '@/shared/hooks/useSocket';
import { Card } from '@/shared/ui/card';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Chats from './Chats/Chats';
import ChatScreen from './ChatScreen/ChatScreen';
import NotFoundChat from './NotFoundChat';

export default function ChatPage() {
	const [searchParams] = useSearchParams();
	const [chatId, setChatId] = useState<number>();
	const chat = searchParams.get('chat');
	const socket = useSocket();

	useEffect(() => {
		if (chat) setChatId(Number(chat));
	}, [chat]);

	return (
		<Card className="flex justify-between h-[calc(100vh-8rem)] min-h-[500px] overflow-hidden shadow-soft">
			<div className="border-r border-border/50 overflow-hidden flex-shrink-0 flex-[30%] min-w-56 flex flex-col">
				<div className="p-4 pb-3">
					<Search />
				</div>
				<div className="flex-1 overflow-y-auto overflow-x-hidden">
					<Chats />
				</div>
			</div>
			{chatId && socket ? <ChatScreen chatId={chatId} /> : <NotFoundChat />}
		</Card>
	);
}
