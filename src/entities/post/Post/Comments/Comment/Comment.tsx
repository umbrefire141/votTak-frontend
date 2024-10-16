import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { formatName } from '@/shared/utils/formatName';
import { timeSince } from '@/shared/utils/timeSince';
import Actions from '../../Actions/Actions';
import Images from '../../Images/Images';
import { ICommentProps } from './Comment.interface';

const Comment = ({ comment }: ICommentProps) => {
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
				<Actions uuid="53" />
			</div>
			<Images images={comment.photos} />
			<p>{comment.message}</p>
		</div>
	);
};

export default Comment;
