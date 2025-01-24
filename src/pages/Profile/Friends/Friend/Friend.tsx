import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { Button } from '@/shared/ui/button';
import { formatName } from '@/shared/utils/formatName';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
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
		<Button
			onClick={navigateToAnotherProfile}
			variant="ghost"
			className="w-full flex p-0 h-auto flex-col items-center gap-2"
		>
			<AvatarWithUserInfo
				avatarSrc={image}
				fullName={formatName(firstname, lastname)}
				direction="column"
				sizeTitle="base"
			/>
		</Button>
	);
};

export default Friend;
