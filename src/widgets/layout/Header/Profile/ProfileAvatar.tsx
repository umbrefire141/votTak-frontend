import { apiServer } from '@/shared/consts/apiServer.const';
import { useUserStore } from '@/shared/model/user.store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ProfileAvatar = () => {
	const { user } = useUserStore();

	return (
		<div className="flex items-center gap-1.5">
			<Avatar className="w-8 h-8 ring-2 ring-primary/10">
				<AvatarImage
					src={`${apiServer}/${user?.avatar?.photo.image}`}
					alt={user?.nickname}
				/>
				<AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
					{user?.firstname?.[0]}{user?.lastname?.[0]}
				</AvatarFallback>
			</Avatar>
			<MdKeyboardArrowDown className="w-4 h-4 text-muted-foreground" />
		</div>
	);
};

export default ProfileAvatar;
