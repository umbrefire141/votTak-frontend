import Post from '../../Post/Post';
import { IPosts } from './Posts.interface';

const Posts = ({ posts }: IPosts) => {
	return (
		<div className="flex flex-col gap-5">
			{posts.map(post => (
				<Post key={post.uuid} {...post} />
			))}
		</div>
	);
};

export default Posts;
