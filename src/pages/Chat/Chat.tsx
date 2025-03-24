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
		<Card className="flex justify-between mb-3 h-[600px]">
			<div className="border-r-2 overflow-hidden flex-shrink flex-grow-0 flex-[30%] min-w-56">
				<div className="p-4 pb-5">
					<Search />
				</div>
				<div className="border-t-2 h-full max-h-[516px] overflow-y-auto overflow-x-hidden">
					<Chats />
				</div>
			</div>
			{chatId && socket ? <ChatScreen chatId={chatId} /> : <NotFoundChat />}
		</Card>
	);
}
