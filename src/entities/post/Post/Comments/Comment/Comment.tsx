import commentsService from '@/shared/api/comments.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { IComment } from '@/shared/types/Comment.interface';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import { formatName } from '@/shared/utils/formatName';
import { timeSince } from '@/shared/utils/timeSince';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Actions from './Actions/Actions';
import { ICommentProps } from './Comment.interface';

const Comment = ({ comment }: ICommentProps) => {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(comment.message);
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (data: Pick<IComment, 'message'>) =>
			commentsService.updateComment(comment.id, data),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
		},
	});

	const submitData = () => {
		mutation.mutate({
			message: value,
		});
		setIsEdit(false);
	};

	return (
		<div className="border-b-2 pb-3">
			<div className="flex justify-between items-start">
				<AvatarWithUserInfo
					avatarSrc={undefined}
					fullName={formatName(
						comment.author.firstname,
						comment.author.lastname
					)}
					extraInfo={timeSince(comment.created_at)}
					className="mb-4"
				/>
				<Actions id={comment.id} setIsEdit={setIsEdit} />
			</div>
			{isEdit ? (
				<>
					<Textarea
						placeholder="What's on your mind?"
						className="w-full h-24 mb-4"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<Button onClick={submitData}>Update</Button>
				</>
			) : (
				<p>{value}</p>
			)}
		</div>
	);
};

export default Comment;
