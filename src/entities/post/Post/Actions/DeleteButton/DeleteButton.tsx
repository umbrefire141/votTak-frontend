import postsService from '@/shared/api/posts.service';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { MdDelete } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { IDeleteButtonComponent } from './DeleteButton.interface';

const DeleteButton = ({ uuid }: IDeleteButtonComponent) => {
	const queryClient = useQueryClient();

	const removePostMutation = useMutation({
		mutationFn: () => postsService.deletePost(uuid),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	return (
		<DropdownMenuItem
			className="cursor-pointer rounded-lg flex items-center gap-3 px-2 py-2 text-sm text-destructive focus:bg-destructive/10"
			onClick={() => removePostMutation.mutate()}
		>
			<MdDelete className="w-4 h-4" />
			Delete
		</DropdownMenuItem>
	);
};

export default DeleteButton;
