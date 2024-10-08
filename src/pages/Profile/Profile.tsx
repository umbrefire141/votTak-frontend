import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import usersService from '@/shared/api/users/users.service';
import { IPost } from '@/shared/types/Post.interface';
import { IUser } from '@/shared/types/User.interface';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photos from './Photos/Photos';

export default function ProfilePage() {
	const { uuid } = useParams();
	const [user, setUser] = useState<IUser | null>(null);

	const navigate = useNavigate();

	const fetchUser = async () => {
		const user = await usersService.getUser(uuid as string);
		setUser(user);

		if (!user) navigate('/');
	};

	useEffect(() => {
		if (!user && uuid) fetchUser();
	}, [user, uuid]);

	return (
		<div className="grid grid-cols-5 gap-4 lg:grid-cols-4">
			{user && (
				<>
					<Info
						uuid={user.uuid}
						avatar={user.avatar}
						email={user.email}
						firstname={user.firstname}
						lastname={user.lastname}
						info={user.user_info}
						friendsCount={user.friends.length}
						photosCount={user.photos.length}
					/>
					<div className="col-start-1 col-end-13 lg:col-start-auto lg:col-end-auto">
						<Friends friends={user.friends} uuid={user.uuid} />
						<Photos photos={user.photos} />
					</div>
					<div className="col-start-1 col-end-13 lg:justify-self-center lg:col-start-2 lg:col-end-7">
						<CreatePost />
						<Posts posts={user?.posts as IPost[]} />
					</div>
				</>
			)}
		</div>
	);
}
