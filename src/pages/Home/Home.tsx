import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import Users from '@/entities/user/container/Users/Users';

export default function HomePage() {
	const data: any = [];

	return (
		<div className="flex gap-5 justify-between">
			<div className="w-full">
				<CreatePost />
				<Posts posts={data?.posts ? data.posts : []} />
			</div>
			<Users />
		</div>
	);
}
