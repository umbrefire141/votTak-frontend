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
			<DropdownMenuTrigger className="outline-none p-1.5 transition-all duration-200 rounded-xl hover:bg-accent hover:scale-105 active:scale-95">
				<ProfileAvatar />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1.5 min-w-[200px]" align="end">
				<DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
					My Account
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<ProfileItems />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Profile;
