import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import { Link } from 'react-router-dom';
import { IFriend } from './Friend.interface';

type FriendProps = {
	friend: IFriend;
};

const Friend = ({ friend }: FriendProps) => {
	const { uuid, image, firstname, lastname } = friend;
	return (
		<Link to={`/profile/${uuid}`} className="flex flex-col items-center gap-2">
			<AvatarWithUserInfo
				avatarSrc={image}
				fullName={formatName(firstname, lastname)}
				direction="column"
				sizeTitle="base"
			/>
		</Link>
	);
};

export default Friend;
