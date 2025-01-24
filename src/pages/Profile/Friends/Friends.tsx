import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import Friend from './Friend/Friend';
import { IFriendsComponent } from './Friends.interface';

const Friends = ({ uuid, friends }: IFriendsComponent) => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Friends</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-3 gap-4">
				{friends.length > 0 ? (
					friends.map(friend =>
						friend.userOf.uuid !== uuid ? (
							<Friend
								key={friend.id}
								user_uuid={uuid}
								friend={{
									uuid: friend.userOf.uuid,
									image: friend?.userOf?.avatar?.photo.image,
									firstname: friend.userOf.firstname,
									lastname: friend.userOf.lastname,
								}}
							/>
						) : (
							<Friend
								key={friend.id}
								user_uuid={uuid}
								friend={{
									uuid: friend.user.uuid,
									image: friend?.user?.avatar?.photo.image,
									firstname: friend.user.firstname,
									lastname: friend.user.lastname,
								}}
							/>
						)
					)
				) : (
					<div className="text-center w-full col-span-3 font-medium">
						No friends
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default Friends;
