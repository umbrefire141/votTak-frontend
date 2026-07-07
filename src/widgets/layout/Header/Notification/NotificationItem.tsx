import { INotification } from '@/shared/types/Notification.interface';
import { timeSince } from '@/shared/utils/timeSince';

const NotificationItem = ({ message, created_at }: INotification) => {
	return (
		<div className="flex justify-between gap-3 px-1 py-2 rounded-lg transition-colors hover:bg-accent">
			<div className="text-sm text-foreground/90">{message}</div>
			<div className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">
				{timeSince(created_at)}
			</div>
		</div>
	);
};

export default NotificationItem;
