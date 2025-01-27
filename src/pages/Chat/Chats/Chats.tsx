import chatService from '@/shared/api/chat/chat.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Chats = () => {
	const { data: chats } = useQuery('chats', chatService.getChats);

	return (
		<div className="overflow-y-auto overflow-x-hidden mt-5 flex flex-col gap-5">
			{chats &&
				chats.map(chat => (
					<Link
						key={chat.id}
						to={`?chat=${chat.id}`}
						className="w-full cursor-pointer inline-flex items-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-16 rounded-md px-5 justify-start gap-4 border-b-1"
					>
						<AvatarWithUserInfo
							avatarSrc={chat.users[chat.users.length - 1].avatar?.photo.image}
							fullName={formatName(
								chat.users[chat.users.length - 1].firstname,
								chat.users[chat.users.length - 1].lastname
							)}
							extraInfo={chat.messages[chat.messages.length - 1]?.message}
						/>
					</Link>
				))}
		</div>
	);
};

export default Chats;
