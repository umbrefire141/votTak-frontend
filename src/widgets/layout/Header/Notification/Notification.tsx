import { Button } from '@/shared/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { IoNotificationsOutline } from 'react-icons/io5';
import NotificationItems from './NotificationItems';

const Notification = () => {
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
					<NotificationItems />
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Notification;
