import { apiServer } from '@/shared/consts/apiServer.const';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { formatName } from '@/shared/utils/formatName';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserLogo from '@/app/media/user_logo.png';
import { IFriend } from './Friend.interface';

type FriendProps = {
	friend: IFriend;
	user_uuid: string;
};

const Friend = ({ friend, user_uuid }: FriendProps) => {
	const { uuid, image, firstname, lastname } = friend;
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const navigateToAnotherProfile = () => {
		navigate(`/profile/${uuid}`);
		queryClient.invalidateQueries({
			queryKey: ['users', user_uuid, 'friend', user_uuid],
			exact: true,
		});
	};
	return (
		<button
			onClick={navigateToAnotherProfile}
			className="flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 hover:bg-accent active:scale-95"
		>
			<Avatar className="w-12 h-12 ring-2 ring-border/50">
				<AvatarImage src={image ? `${apiServer}/${image}` : UserLogo} />
				<AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
					{firstname?.[0]}{lastname?.[0]}
				</AvatarFallback>
			</Avatar>
			<span className="text-[11px] font-medium text-muted-foreground text-center leading-tight line-clamp-2">
				{formatName(firstname, lastname)}
			</span>
		</button>
	);
};

export default Friend;
