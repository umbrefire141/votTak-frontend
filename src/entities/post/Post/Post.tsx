import postsService, { inputPostType } from '@/shared/api/posts.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { IPost } from '@/shared/types/Post.interface';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { Textarea } from '@/shared/ui/textarea';
import { formatName } from '@/shared/utils/formatName';
import { timeSince } from '@/shared/utils/timeSince';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Actions from './Actions/Actions';
import Comment from './Comment/Comment';
import Comments from './Comments/Comments';
import Images from './Images/Images';
import Like from './Like/Like';
import Share from './Share/Share';

const Post = ({
	uuid,
	content,
	likes,
	comments,
	photos,
	created_at,
	author,
}: IPost) => {
	const [isShownComments, setIsShownComments] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [images, setImages] = useState(photos);
	const [value, setValue] = useState(content);
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (data: inputPostType) => postsService.updatePost(uuid, data),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
		},
	});

	const submitData = () => {
		mutation.mutate({
			content: value,
			hidden: false,
			photoIds: images.map(({ id }) => id),
		});
		setIsEdit(false);
	};

	return (
		<Card className="max-w-lg">
			<CardHeader className="flex-row gap-4 items-start justify-between">
				<AvatarWithUserInfo
					avatarSrc={author?.avatar?.photo.image}
					fullName={formatName(author.firstname, author.lastname)}
					extraInfo={timeSince(created_at)}
				/>
				<Actions uuid={uuid} setIsEdit={setIsEdit} />
			</CardHeader>
			<CardContent>
				{isEdit ? (
					<Textarea
						placeholder="What's on your mind?"
						className="w-full h-24 mb-4"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				) : (
					<p className="mb-3">{value}</p>
				)}
				{photos && (
					<Images images={images} setImages={setImages} isEdit={isEdit} />
				)}
				{isEdit && (
					<Button className="w-full" onClick={submitData}>
						Update
					</Button>
				)}
			</CardContent>
			<CardFooter className="justify-between gap-5">
				<div className="flex gap-5">
					<Like uuid={uuid} likes={likes} />
					<Comment
						comments={comments.length}
						setIsShownComments={setIsShownComments}
					/>
				</div>
				<Share />
			</CardFooter>
			{(isShownComments || comments.length > 0) && (
				<Comments post_uuid={uuid} comments={comments} />
			)}
		</Card>
	);
};

export default Post;
