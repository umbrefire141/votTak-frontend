import { useTheme } from '@/shared/hooks/useTheme';
import { useUserStore } from '@/shared/model/user.store';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { BiUser } from 'react-icons/bi';
import { IoSettings } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ChangeTheme from './ChangeTheme';
import LogoutButton from './LogoutButton';

const ProfileItems = () => {
	const { user } = useUserStore();
	const { theme } = useTheme();

	return (
		<>
			<DropdownMenuItem>
				<Link
					to={`profile/${user?.uuid}`}
					className="flex items-center gap-1 w-full"
				>
					<BiUser className="w-6 h-6" />
					Profile
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Link to="/settings" className="flex items-center gap-1 w-full">
					<IoSettings className="w-6 h-6" />
					Settings
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<ChangeTheme theme={theme} />
			</DropdownMenuItem>
			<DropdownMenuItem>
				<LogoutButton />
			</DropdownMenuItem>
		</>
	);
};

export default ProfileItems;
