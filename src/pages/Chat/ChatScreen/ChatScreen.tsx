import chatService from '@/shared/api/chat/chat.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { useSocket } from '@/shared/hooks/useSocket';
import { useUserStore } from '@/shared/model/user.store';
import { IMessage } from '@/shared/types/Chat.interface';
import { formatName } from '@/shared/utils/formatName';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { IChatScreenComponent } from './ChatScreen.interface';
import Messages from './Messages/Messages';
import WriteMessage from './WriteMessage/WriteMessage';

const ChatScreen = ({ chatId }: IChatScreenComponent) => {
	const { data: chat } = useQuery('chat', () => chatService.getChat(chatId));
	const { user } = useUserStore();
	const socket = useSocket();
	const connected = true;
	const [messages, setMessages] = useState<IMessage[]>([]);

	const messageListener = (message: IMessage) => {
		setMessages(prev => [...prev, message]);
	};

	useEffect(() => {
		if (socket) {
			socket.on('create_message', messageListener);
			socket.emit('get_messages', chatId, (data: IMessage[]) => {
				setMessages([...data]);
			});

			return () => {
				socket.removeListener('create_message');
				socket.removeListener('get_messages');
			};
		}
	}, [socket, chatId]);

	return (
		<div className="flex-1 overflow-hidden">
			{chat && user ? (
				<>
					<div className="border-b-2 p-4">
						<AvatarWithUserInfo
							avatarSrc={chat.users[chat.users.length - 1].avatar?.photo?.image}
							fullName={formatName(
								chat.users[chat.users.length - 1].firstname,
								chat.users[chat.users.length - 1].lastname
							)}
							extraInfo={connected ? 'Online' : 'Offline'}
						/>
					</div>
					<div className="w-full h-full max-h-[516px] overflow-y-auto overflow-x-hidden flex justify-between flex-col">
						<Messages messages={messages} />
						<WriteMessage chatId={chatId} user_uuid={user.uuid} />
					</div>
				</>
			) : (
				<div>Some error</div>
			)}
		</div>
	);
};

export default ChatScreen;
