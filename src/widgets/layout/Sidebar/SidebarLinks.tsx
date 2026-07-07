import { useUserStore } from '@/shared/model/user.store';
import { BiChat, BiGroup, BiHome, BiPhotoAlbum, BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) =>
	`flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
		isActive
			? 'bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary shadow-sm'
			: 'text-muted-foreground hover:bg-accent hover:text-foreground'
	}`;

const iconClass = 'w-5 h-5 flex-shrink-0';

const SidebarLinks = () => {
	const { user } = useUserStore();

	return (
		<div className="flex flex-col gap-1">
			<NavLink
				to={`/profile/${user && user.uuid}`}
				className={linkClass}
			>
				<BiUser className={iconClass} />
				My Profile
			</NavLink>
			<NavLink
				to={'/'}
				className={linkClass}
			>
				<BiHome className={iconClass} />
				News
			</NavLink>
			<NavLink
				to={'/chat'}
				className={linkClass}
			>
				<BiChat className={iconClass} />
				Messages
			</NavLink>
			<NavLink
				to={'/friends'}
				className={linkClass}
			>
				<BiGroup className={iconClass} />
				Friends
			</NavLink>
			<NavLink
				to={'/photos'}
				className={linkClass}
			>
				<BiPhotoAlbum className={iconClass} />
				Photos
			</NavLink>
		</div>
	);
};

export default SidebarLinks;
