import postsService from '@/shared/api/posts.service';
import { useUserStore } from '@/shared/model/user.store';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { ILikeComponent } from './Like.interface';

const Like = ({ uuid, likes }: ILikeComponent) => {
	const { user: currentUser } = useUserStore();
	const [active, setActive] = useState(false);
	const [countLikes, setCountLikes] = useState(likes.length);

	const userId = likes.find(({ user }) => user.uuid === currentUser?.uuid)?.user
		.uuid;

	console.log(userId);

	const handleActionsPost = async () => {
		if (active) {
			setCountLikes(countLikes - 1);
			setActive(false);
			await postsService.unlikePost(uuid);
		} else {
			setCountLikes(countLikes + 1);
			setActive(true);
			await postsService.likePost(uuid);
		}
	};

	useEffect(() => {
		if (userId) setActive(true);
	}, [userId]);

	return (
		<button
			className="cursor-pointer flex items-center gap-1 rounded-md p-1 "
			onClick={handleActionsPost}
		>
			<AiOutlineLike
				className={clsx('w-6 h-6', {
					['text-red-500']: active,
				})}
			/>
			<p className="text-lg">{countLikes}</p>
			<p className="text-base">Likes</p>
		</button>
	);
};

export default Like;
