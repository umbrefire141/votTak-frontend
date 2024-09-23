import AvatarWithUserInfo from '@/shared/ui/AvatarWithUserInfo/AvatarWithUserInfo';

const NotificationItem = () => {
	return (
		<div className="flex justify-between gap-2">
			<AvatarWithUserInfo
				avatarSrc="https://images.unsplash.com/photo-1720849644323-499c62694fbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				fullName="Alex Joh"
				extraInfo="Some content"
			/>
			<div>7s ago</div>
		</div>
	);
};

export default NotificationItem;
