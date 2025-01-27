import { useUserStore } from '@/shared/model/user.store';
import { BiChat, BiGroup, BiHome, BiPhotoAlbum, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SidebarLinks = () => {
	const { user } = useUserStore();

	return (
		<div className="flex flex-col gap-1">
			<Link
				to={`/profile/${user && user.uuid}`}
				className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-slate-600 hover:text-white"
			>
				<BiUser className="w-6 h-6" />
				<div className="text-sm">My Profile</div>
			</Link>
			<Link
				to={'/'}
				className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-slate-600 hover:text-white"
			>
				<BiHome className="w-6 h-6" />
				<div className="text-sm">News</div>
			</Link>
			<Link
				to={'/chat'}
				className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-slate-600 hover:text-white"
			>
				<BiChat className="w-6 h-6" />
				<div className="text-sm">Messages</div>
			</Link>
			<Link
				to={'/friends'}
				className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-slate-600 hover:text-white"
			>
				<BiGroup className="w-6 h-6" />
				<div className="text-sm">Friends</div>
			</Link>
			<Link
				to={'/photos'}
				className="flex w-full items-center gap-2 p-2 rounded-md hover:bg-slate-600 hover:text-white"
			>
				<BiPhotoAlbum className="w-6 h-6" />
				<div className="text-sm">Photos</div>
			</Link>
		</div>
	);
};

export default SidebarLinks;
