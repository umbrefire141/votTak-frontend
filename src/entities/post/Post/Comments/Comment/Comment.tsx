import AvatarWithUserInfo from '@/shared/ui/AvatarWithUserInfo/AvatarWithUserInfo';
import Actions from '../../Actions/Actions';
import Images from '../../Images/Images';

const Comment = () => {
	return (
		<div className="border-b-2 pb-3">
			<div className="flex justify-between items-start">
				<AvatarWithUserInfo
					avatarSrc={undefined}
					fullName="Alex Joh"
					extraInfo="7s ago"
					className="mb-4"
				/>
				<Actions uuid="53" />
			</div>
			<Images />
			<p>Content</p>
		</div>
	);
};

export default Comment;
