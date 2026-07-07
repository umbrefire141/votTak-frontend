import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import { Link } from 'react-router-dom';
import { IUsersComponent } from './Users.interface';

const Users = ({ users }: IUsersComponent) => {
	return (
		<div className="p-4">
			<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
				Users
			</h4>
			<div className="flex flex-col gap-1">
				{users &&
					users.map(user => (
						<Link
							key={user.uuid}
							to={`/profile/${user.uuid}`}
							className="block p-2 rounded-lg transition-all duration-200 hover:bg-accent"
						>
							<AvatarWithUserInfo
								avatarSrc={user?.avatar?.photo?.image}
								fullName={formatName(user.firstname, user.lastname)}
								sizeTitle="sm"
							/>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Users;
