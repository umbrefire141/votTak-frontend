import { useUserStore } from '@/shared/model/user.store';
import { BiChat, BiGroup, BiHome, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SidebarLinks = () => {
	const { user } = useUserStore();

	return (
		<div className="flex flex-col gap-1">
			<Link
				to={`/profile/${user && user.uuid}`}
				className="flex w-full items-center gap-2 p-2 rounded-md "
			>
				<BiUser className="w-6 h-6" />
				<div className="text-sm">My Profile</div>
			</Link>
			<Link to={'/'} className="flex w-full items-center gap-2 p-2 rounded-md ">
				<BiHome className="w-6 h-6" />
				<div className="text-sm">News</div>
			</Link>
			<Link
				to={'/chat'}
				className="flex w-full items-center gap-2 p-2 rounded-md "
			>
				<BiChat className="w-6 h-6" />
				<div className="text-sm">Messages</div>
			</Link>
			<Link
				to={'/friends'}
				className="flex w-full items-center gap-2 p-2 rounded-md "
			>
				<BiGroup className="w-6 h-6" />
				<div className="text-sm">Friends</div>
			</Link>
		</div>
	);
};

export default SidebarLinks;
