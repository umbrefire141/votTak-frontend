import { useNotifications } from '@/shared/hooks/useNotifications';
import { useUserStore } from '@/shared/model/user.store';
import { INotification } from '@/shared/types/Notification.interface';
import { Button } from '@/shared/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { toast } from 'sonner';
import NotificationItems from './NotificationItems';

const Notification = () => {
	const socket = useNotifications();
	const { user } = useUserStore();
	const [notifications, setNotifications] = useState<INotification[]>([]);

	const messageListener = (notification: INotification) => {
		setNotifications(prev => [...prev, notification]);
		toast(notification.message);
	};

	useEffect(() => {
		if (socket && user) {
			socket.on('sendNotification', messageListener);
			socket.emit(
				'getNotifications',
				{ user_uuid: user.uuid },
				(data: INotification[]) => {
					setNotifications([...data]);
				}
			);

			return () => {
				socket.removeListener('sendNotification');
				socket.removeListener('getNotifications');
			};
		}
	}, [socket]);

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger className="cursor-pointer rounded-md p-2 ">
					<IoNotificationsOutline className="stroke-black w-8 h-8 dark:stroke-slate-100" />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="min-w-80">
					<DropdownMenuLabel className="flex items-center justify-between gap-2">
						<div className="font-bold">Notifications</div>
						<Button
							className="text-blue-500 inline p-0
						"
							variant="link"
						>
							See more...
						</Button>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<NotificationItems notifications={notifications} />
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Notification;
