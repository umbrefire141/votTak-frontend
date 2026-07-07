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
				<DropdownMenuTrigger className="cursor-pointer rounded-xl p-2.5 transition-all duration-200 hover:bg-accent hover:scale-105 active:scale-95">
					<IoNotificationsOutline className="w-5 h-5 text-foreground" />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="min-w-80 p-2" align="end">
					<DropdownMenuLabel className="flex items-center justify-between gap-2 px-2 py-1.5">
						<div className="font-bold text-base">Notifications</div>
						<Button className="text-primary p-0 h-auto" variant="link" size="sm">
							See more
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
