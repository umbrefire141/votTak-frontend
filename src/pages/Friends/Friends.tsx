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

	if (friends && friends.length < 1) return <div>No friends</div>;

	return (
		<div>
			{friends &&
				friends.map(friend => (
					<Friend key={friend.id} friend={friend} getFriends={getFriends} />
				))}
		</div>
	);
}
