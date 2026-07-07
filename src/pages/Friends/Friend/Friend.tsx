import friendsService from '@/shared/api/friends/friends.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Link } from 'react-router-dom';
import { IFriendComponent } from './Friend.interface';

const Friend = ({ friend, getFriends }: IFriendComponent) => {
	const actionsFriends = async (id: number, action: 'confirm' | 'cancel') => {
		if (action === 'confirm') await friendsService.confirmFriend(id);
		if (action === 'cancel') await friendsService.cancelFriend(id);

		getFriends();
	};

	return (
		<Card className="card-hover overflow-hidden">
			<div className="h-20 bg-gradient-to-r from-primary/10 to-purple-500/10" />
			<div className="-mt-10 px-4">
				<Link to={`/profile/${friend.userOf.uuid}`}>
					<div className="flex flex-col items-center">
						<AvatarWithUserInfo
							fullName={`${friend.userOf.firstname} ${friend.userOf.lastname}`}
							avatarSrc={friend.userOf.avatar?.photo.image}
							extraInfo={`@${friend.userOf.nickname}`}
							direction="column"
							avatarSize="xl"
							sizeTitle="base"
						/>
					</div>
				</Link>
			</div>
			<CardContent className="pt-4">
				{!friend?.confirmed && (
					<div className="flex gap-2">
						<Button onClick={() => actionsFriends(friend.id, 'confirm')} className="flex-1 h-9 text-sm">
							Confirm
						</Button>
						<Button onClick={() => actionsFriends(friend.id, 'cancel')} variant="outline" className="flex-1 h-9 text-sm">
							Cancel
						</Button>
					</div>
				)}
				{friend?.confirmed && (
					<p className="text-center text-xs text-muted-foreground">Connected</p>
				)}
			</CardContent>
		</Card>
	);
};

export default Friend;
