import friendsService from '@/shared/api/friends/friends.service';
import { IFriend } from '@/shared/types/User.interface';
import { useEffect, useState } from 'react';
import Friend from './Friend/Friend';

export default function FriendsPage() {
	const [friends, setFriends] = useState<IFriend[] | null>(null);

	const getFriends = async () => {
		const data = await friendsService.getFriendsUser();
		setFriends(data);
	};

	useEffect(() => {
		if (!friends) getFriends();
	}, [friends]);

	return (
		<div className="fade-in">
			<div className="mb-6">
				<h2 className="text-2xl font-bold gradient-text">Friends</h2>
				<p className="text-sm text-muted-foreground mt-1">
					{friends ? `${friends.length} friend${friends.length !== 1 ? 's' : ''}` : 'Loading...'}
				</p>
			</div>
			{friends && friends.length > 0 ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{friends.map(friend => (
						<Friend key={friend.id} friend={friend} getFriends={getFriends} />
					))}
				</div>
			) : (
				<div className="text-center py-16 text-muted-foreground">
					<p className="text-lg font-medium">No friends yet</p>
					<p className="text-sm mt-1">Connect with people to grow your network</p>
				</div>
			)}
		</div>
	);
}
