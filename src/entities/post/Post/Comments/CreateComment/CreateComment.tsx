import commentsService from '@/shared/api/comments.service';
import { IComment } from '@/shared/types/Comment.interface';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ICreateCommentProps } from './CreateComment.interface';

const CreateComment = ({ post_uuid }: ICreateCommentProps) => {
	const queryClient = useQueryClient();
	const [value, setValue] = useState('');

	const mutation = useMutation({
		mutationFn: (dto: Pick<IComment, 'message'>) =>
			commentsService.createComment(post_uuid, dto),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
		},
	});

	const submitData = () => {
		mutation.mutate({ message: value });
	};

	return (
		<div className="mb-4 border-b-2 pb-5">
			<h3 className="text-lg font-bold mb-4">Create comment</h3>
			<Textarea
				placeholder="What's on your mind?"
				className="w-full h-24 mb-4"
				value={value}
				onChange={e => setValue(e.target.value as string)}
			/>
			<Button className="flex w-full max-w-28 ml-auto" onClick={submitData}>
				Post
			</Button>
		</div>
	);
};

export default CreateComment;
