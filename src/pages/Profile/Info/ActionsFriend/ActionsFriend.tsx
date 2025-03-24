import friendsService from '@/shared/api/friends/friends.service';
import { useNotifications } from '@/shared/hooks/useNotifications';
import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { IActionsFriend } from './ActionsFriend.interface';

const ActionsFriend = ({ uuid, user_id, isFriend }: IActionsFriend) => {
	const { getMe, user } = useUserStore();
	const socket = useNotifications();

	const addFriend = () => {
		friendsService.addFriend(uuid);
		getMe();
		socket &&
			socket.emit('sendNotification', {
				message: `${user?.firstname} wants to befriend with you`,
				user_uuid: uuid,
			});
	};

	const removeFriend = () => {
		friendsService.deleteFromFriend(user_id);
		getMe();
	};

	return (
		<>
			{!isFriend && <Button onClick={addFriend}>Add friend</Button>}
			{isFriend && <Button onClick={removeFriend}>Remove friend</Button>}
		</>
	);
};

export default ActionsFriend;
