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
		<div className="flex gap-3">
			<div className="flex-shrink-0">
				<AvatarWithUserInfo
					avatarSrc={undefined}
					fullName={formatName(
						comment.author.firstname,
						comment.author.lastname
					)}
					extraInfo={timeSince(comment.created_at)}
					avatarSize="sm"
					sizeTitle="sm"
				/>
			</div>
			<div className="flex-1 min-w-0">
				{isEdit ? (
					<>
						<Textarea
							placeholder="Edit comment..."
							className="w-full min-h-[60px] mb-2 resize-none bg-background border-border/50 focus-visible:ring-primary/20 rounded-lg text-sm"
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
						<div className="flex gap-2 justify-end">
							<Button size="sm" variant="ghost" onClick={() => setIsEdit(false)}>
								Cancel
							</Button>
							<Button size="sm" onClick={submitData}>
								Update
							</Button>
						</div>
					</>
				) : (
					<div className="bg-accent/50 rounded-2xl px-4 py-2.5">
						<div className="flex items-center justify-between gap-2 mb-1">
							<span className="text-sm font-semibold">
								{formatName(comment.author.firstname, comment.author.lastname)}
							</span>
							<Actions id={comment.id} setIsEdit={setIsEdit} />
						</div>
						<p className="text-sm leading-relaxed">{value}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Comment;
