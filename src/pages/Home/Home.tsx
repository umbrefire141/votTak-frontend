import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import Users from '@/entities/user/container/Users/Users';
import postsService from '@/shared/api/posts.service';
import usersService from '@/shared/api/users/users.service';
import Loader from '@/shared/components/Loader/Loader';
import { useQuery } from 'react-query';

export default function HomePage() {
	const { data, isLoading } = useQuery({
		queryKey: ['postsData'],
		queryFn: () => postsService.getAllPosts(),
	});

	const { data: users, isLoading: isLoadingUser } = useQuery({
		queryKey: ['usersData'],
		queryFn: () => usersService.getUsers(),
	});

	if (isLoading && isLoadingUser) return <Loader />;

	if (isLoading) return <Loader />;

	return (
		<div className="flex gap-5 justify-between">
			<div className="w-full">
				<CreatePost />
				<Posts posts={data?.posts ? data.posts : []} />
			</div>
			{users && users.length > 0 && (
				<div className="w-full max-w-72 p-5 shadow-sm rounded-lg bg-card text-card-foreground border">
					<Users users={users ? users : []} />
				</div>
			)}
		</div>
	);
}
