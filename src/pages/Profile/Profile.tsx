import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import { useUserStore } from '@/shared/model/user.store';
import { IPost } from '@/shared/types/Post.interface';
import Friends from './Friends/Friends';
import Info from './Info/Info';

export default function ProfilePage() {
	const { user } = useUserStore();

	return (
		<div className="grid grid-cols-4 gap-4">
			{user && (
				<>
					<Info
						uuid={user.uuid}
						avatar={user.avatar}
						email={user.email}
						firstname={user.firstname}
						lastname={user.lastname}
						info={user.info}
						friendsCount={user.friends.length}
						photosCount={user.photos.length}
					/>
					<div>
						{user.friends.length > 0 && <Friends friends={user.friends} />}
						{user.photos.length > 0 && <Friends friends={user.friends} />}
					</div>
					<div className="col-start-2 col-end-7">
						<CreatePost />
						<Posts posts={user?.posts as IPost[]} />
					</div>
				</>
			)}
		</div>
	);
}
