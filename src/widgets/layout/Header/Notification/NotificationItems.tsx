import { INotification } from '@/shared/types/Notification.interface';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import NotificationItem from './NotificationItem';

type NotificationsItemsType = {
	notifications: INotification[];
};

const NotificationItems = ({ notifications }: NotificationsItemsType) => {
	return (
		<>
			<DropdownMenuItem className="block">
				{notifications.map(notification => (
					<NotificationItem
						key={notification.id}
						message={notification.message}
						created_at={notification.created_at}
					/>
				))}
			</DropdownMenuItem>
		</>
	);
};

export default NotificationItems;
