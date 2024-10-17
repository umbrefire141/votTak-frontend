import commentsService from '@/shared/api/comments.service';
import { Button } from '@/shared/ui/button';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { MdDelete } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { IDeleteButtonComponent } from './DeleteButton.interface';

const DeleteButton = ({ id }: IDeleteButtonComponent) => {
	const queryClient = useQueryClient();

	const removePostMutation = useMutation({
		mutationFn: () => commentsService.deleteComment(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	return (
		<DropdownMenuItem className="p-0">
			<Button
				variant="ghost"
				size="sm"
				onClick={() => removePostMutation.mutate()}
			>
				<MdDelete className="w-5 h-5 mr-2" />
				Delete
			</Button>
		</DropdownMenuItem>
	);
};

export default DeleteButton;
