import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import NotificationItem from './NotificationItem';

const NotificationItems = () => {
	return (
		<>
			<DropdownMenuItem className="block">
				<NotificationItem />
			</DropdownMenuItem>
		</>
	);
};

export default NotificationItems;
