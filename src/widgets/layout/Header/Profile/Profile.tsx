import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import ProfileAvatar from './ProfileAvatar';
import ProfileItems from './ProfileItems';

const Profile = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none p-2 transition-all rounded-sm hover:backdrop-brightness-200">
				<ProfileAvatar />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<ProfileItems />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Profile;
