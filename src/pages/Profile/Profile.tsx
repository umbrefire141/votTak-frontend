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
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
					<div className="lg:col-span-1 space-y-4">
						<Friends friends={user.friends} uuid={user.uuid} />
						<Photos photos={user.photos} />
					</div>
					<div className="lg:col-span-2 space-y-5">
						{currentUser?.uuid === user.uuid && <CreatePost />}
						<Posts posts={user?.posts as IPost[]} />
					</div>
				</>
			)}
		</div>
	);
}
