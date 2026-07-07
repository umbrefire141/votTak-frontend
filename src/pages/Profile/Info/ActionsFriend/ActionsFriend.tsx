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
			{!isFriend && (
				<Button onClick={addFriend} size="sm" className="gap-1.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
						<path d="M6.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM3.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.023a.715.715 0 0 1-.018.184.747.747 0 0 1-.179.41.746.746 0 0 1-.15.123 7.102 7.102 0 0 1-6.652.757 7.05 7.05 0 0 1-6.232-.755.748.748 0 0 1-.333-.524.747.747 0 0 1-.023-.184l-.001-.022v-.003ZM15.75 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
					</svg>
					Add friend
				</Button>
			)}
			{isFriend && (
				<Button onClick={removeFriend} variant="outline" size="sm" className="gap-1.5">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
						<path d="M6.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM3.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.023a.715.715 0 0 1-.018.184.747.747 0 0 1-.179.41.746.746 0 0 1-.15.123 7.102 7.102 0 0 1-6.652.757 7.05 7.05 0 0 1-6.232-.755.748.748 0 0 1-.333-.524.747.747 0 0 1-.023-.184l-.001-.022v-.003ZM15.75 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
					</svg>
					Friends
				</Button>
			)}
		</>
	);
};

export default ActionsFriend;
