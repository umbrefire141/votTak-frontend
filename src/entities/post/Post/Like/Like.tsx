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
			className={clsx(
				'cursor-pointer flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all duration-200 hover:bg-accent active:scale-95',
				{
					['text-red-500']: active,
					['text-muted-foreground hover:text-foreground']: !active,
				}
			)}
			onClick={handleActionsPost}
		>
			<AiOutlineLike
				className={clsx('w-5 h-5', {
					['fill-red-500']: active,
				})}
			/>
			<span className="text-sm font-medium">{countLikes}</span>
		</button>
	);
};

export default Like;
