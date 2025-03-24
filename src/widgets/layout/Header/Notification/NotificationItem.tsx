import { INotification } from '@/shared/types/Notification.interface';
import { timeSince } from '@/shared/utils/timeSince';

const NotificationItem = ({ message, created_at }: INotification) => {
	return (
		<div className="flex justify-between gap-2">
			<div>{message}</div>
			<div>{timeSince(created_at)}</div>
		</div>
	);
};

export default NotificationItem;
