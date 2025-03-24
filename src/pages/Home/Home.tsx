import Posts from '@/entities/post/container/Posts/Posts';
import CreatePost from '@/entities/post/CreatePost/CreatePost';
import postsService from '@/shared/api/posts.service';
import usersService from '@/shared/api/users/users.service';
import Loader from '@/shared/components/Loader/Loader';
import { useQuery } from 'react-query';
import Sidebar from './Sidebar/Sidebar';

export default function HomePage() {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postsService.getAllPosts(),
	});

	const { data: users, isLoading: isLoadingUser } = useQuery({
		queryKey: ['usersData'],
		queryFn: () => usersService.getUsers(),
	});

	if (isLoading && isLoadingUser) return <Loader />;

	if (isLoading) return <Loader />;

	return (
		<div className="flex mb-5 gap-5 justify-between flex-col lg:flex-row">
			<div className="w-full">
				<CreatePost />
				<Posts posts={data?.posts ? data.posts : []} />
			</div>
			<Sidebar users={users} />
		</div>
	);
}
