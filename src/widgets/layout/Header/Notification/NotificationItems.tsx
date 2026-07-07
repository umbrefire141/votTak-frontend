import { INotification } from '@/shared/types/Notification.interface';
import NotificationItem from './NotificationItem';

type NotificationsItemsType = {
	notifications: INotification[];
};

const NotificationItems = ({ notifications }: NotificationsItemsType) => {
	return (
		<div className="max-h-72 overflow-y-auto">
			{notifications.length > 0 ? (
				notifications.map(notification => (
					<NotificationItem
						key={notification.id}
						message={notification.message}
						created_at={notification.created_at}
					/>
				))
			) : (
				<div className="text-sm text-muted-foreground text-center py-4">
					No notifications yet
				</div>
			)}
		</div>
	);
};

export default NotificationItems;
