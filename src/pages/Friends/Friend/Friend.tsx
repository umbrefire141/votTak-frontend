import friendsService from '@/shared/api/friends/friends.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Link } from 'react-router-dom';
import { IFriendComponent } from './Friend.interface';

const Friend = ({ friend, getFriends }: IFriendComponent) => {
	const actionsFriends = async (id: number, action: 'confirm' | 'cancel') => {
		if (action === 'confirm') await friendsService.confirmFriend(id);
		if (action === 'cancel') await friendsService.cancelFriend(id);

		getFriends();
	};

	return (
		<Card>
			<Link to={`/profile/${friend.userOf.uuid}`}>
				<CardHeader>
					<AvatarWithUserInfo
						fullName={`${friend.userOf.firstname} ${friend.userOf.lastname}`}
						avatarSrc={friend.userOf.avatar?.photo.image}
						extraInfo={friend.userOf.nickname}
					/>
				</CardHeader>
			</Link>
			<CardContent>
				{!friend?.confirmed && (
					<div className="flex gap-3">
						<Button onClick={() => actionsFriends(friend.id, 'confirm')}>
							Confirm
						</Button>
						<Button onClick={() => actionsFriends(friend.id, 'cancel')}>
							Cancel
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default Friend;
