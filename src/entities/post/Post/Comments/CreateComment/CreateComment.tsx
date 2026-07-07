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
		if (!mutation.isError) setValue('');
	};

	return (
		<div>
			<Textarea
				placeholder="Write a comment..."
				className="w-full min-h-[60px] mb-3 resize-none bg-background border-border/50 focus-visible:ring-primary/20 rounded-lg text-sm"
				value={value}
				onChange={e => setValue(e.target.value as string)}
			/>
			<div className="flex justify-end">
				<Button size="sm" className="px-4" onClick={submitData} disabled={!value.trim()}>
					Post
				</Button>
			</div>
		</div>
	);
};

export default CreateComment;
