import { apiServer } from '@/shared/consts/apiServer.const';
import { useUserStore } from '@/shared/model/user.store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ProfileAvatar = () => {
	const { user } = useUserStore();

	return (
		<div className="flex items-center">
			<Avatar>
				<AvatarImage
					src={`${apiServer}/${user?.avatar?.photo.image}`}
					alt={user?.nickname}
				/>
				<AvatarFallback />
			</Avatar>
			<MdKeyboardArrowDown />
		</div>
	);
};

export default ProfileAvatar;
