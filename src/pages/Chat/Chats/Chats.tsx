import chatService from '@/shared/api/chat/chat.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Chats = () => {
	const { data: chats } = useQuery('chats', chatService.getChats);

	return (
		<div className="flex flex-col gap-0.5 px-2">
			{chats &&
				chats.map(chat => (
					<Link
						key={chat.id}
						to={`?chat=${chat.id}`}
						className="w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-accent"
					>
						<AvatarWithUserInfo
							avatarSrc={chat.users[chat.users.length - 1].avatar?.photo.image}
							fullName={formatName(
								chat.users[chat.users.length - 1].firstname,
								chat.users[chat.users.length - 1].lastname
							)}
							extraInfo={chat.messages[chat.messages.length - 1]?.message}
							avatarSize="md"
						/>
					</Link>
				))}
		</div>
	);
};

export default Chats;
