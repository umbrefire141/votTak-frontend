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
			<DropdownMenuItem className="rounded-lg focus:bg-accent">
				<Link
					to={`profile/${user?.uuid}`}
					className="flex items-center gap-3 w-full py-1"
				>
					<BiUser className="w-4 h-4" />
					<span className="text-sm">Profile</span>
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem className="rounded-lg focus:bg-accent">
				<Link to="/settings" className="flex items-center gap-3 w-full py-1">
					<IoSettings className="w-4 h-4" />
					<span className="text-sm">Settings</span>
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem className="rounded-lg focus:bg-accent">
				<ChangeTheme theme={theme} />
			</DropdownMenuItem>
			<DropdownMenuItem className="rounded-lg focus:bg-accent">
				<LogoutButton />
			</DropdownMenuItem>
		</>
	);
};

export default ProfileItems;
