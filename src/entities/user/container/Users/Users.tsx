import { IUser } from '@/shared/types/User.interface';
import AvatarWithUserInfo from '@/shared/ui/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { IUsersComponent } from './Users.interface';

const Users = ({ className }: IUsersComponent) => {
	const users: IUser[] = [];

	return (
		<div
			className={clsx(
				'w-full max-w-72 p-5 shadow-sm rounded-lg bg-card text-card-foreground border',
				className
			)}
		>
			<h4 className="text-lg font-bold mb-5">Users</h4>
			<div className="flex flex-col gap-3">
				{users &&
					users.map(user => (
						<Link
							key={user.uuid}
							to={`/profile/${user.uuid}`}
							className="block border-b-2 p-4 transition-colors hover:bg-slate-50"
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
