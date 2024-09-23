import AvatarWithUserInfo from '@/shared/ui/AvatarWithUserInfo/AvatarWithUserInfo';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { formatName } from '@/shared/utils/formatName';
import { Link } from 'react-router-dom';
import { IFriendsComponent } from './Friends.interface';

const Friends = ({ friends }: IFriendsComponent) => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Friends</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-3 gap-4">
				{friends.map(friend => (
					<Link
						key={friend.id}
						to={friend.user.uuid}
						className="flex flex-col items-center gap-2"
					>
						<AvatarWithUserInfo
							avatarSrc={friend.user.avatar.photo.image}
							fullName={formatName(friend.user.firstname, friend.user.lastname)}
							direction="column"
							sizeTitle="base"
						/>
					</Link>
				))}
			</CardContent>
		</Card>
	);
};

export default Friends;
