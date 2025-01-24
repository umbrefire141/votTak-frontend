import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import usersService from '@/shared/api/users/users.service';
import { useUserStore } from '@/shared/model/user.store';
import { IPost } from '@/shared/types/Post.interface';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Friends from './Friends/Friends';
import Info from './Info/Info';
import Photos from './Photos/Photos';

export default function ProfilePage() {
	const { uuid } = useParams();

	const { user: currentUser } = useUserStore();
	const { data: user } = useQuery({
		queryFn: () => (uuid ? usersService.getUser(uuid as string) : null),
		queryKey: ['users', uuid],
		keepPreviousData: true,
	});

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
						friends={user.friends}
						photosCount={user.photos.length}
					/>
					<div className="col-start-1 col-end-13 lg:col-start-auto lg:col-end-auto">
						<Friends friends={user.friends} uuid={user.uuid} />
						<Photos photos={user.photos} />
					</div>
					<div className="col-start-1 col-end-13 lg:justify-self-center lg:col-start-2 lg:col-end-7">
						{currentUser?.uuid === user.uuid && <CreatePost />}
						<Posts posts={user?.posts as IPost[]} />
					</div>
				</>
			)}
		</div>
	);
}
