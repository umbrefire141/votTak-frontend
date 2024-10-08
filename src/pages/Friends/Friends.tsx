import usersService from '@/shared/api/users/users.service';
import { IFriend } from '@/shared/types/User.interface';
import { Button } from '@/shared/ui/button';
import { useEffect, useState } from 'react';

export default function FriendsPage() {
	const [friends, setFriends] = useState<IFriend[] | null>(null);

	const confirmFriend = async (id: number) => {
		await usersService.confirmFriend(id);
		getFriends();
	};

	const getFriends = async () => {
		const data = await usersService.getFriendUsers();
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
					<div key={friend.id}>
						<div>{friend?.user?.nickname}</div>
						{!friend?.confirmed && (
							<Button onClick={() => confirmFriend(friend.id)}>Confirm</Button>
						)}
					</div>
				))}
		</div>
	);
}
