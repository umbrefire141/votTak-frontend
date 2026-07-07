import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { MdDelete } from 'react-icons/md';

const DeleteButton = () => {
	return (
		<DropdownMenuItem className="cursor-pointer rounded-lg flex items-center gap-3 px-2 py-2 text-sm text-destructive focus:bg-destructive/10">
			<MdDelete className="w-4 h-4" />
			Delete
		</DropdownMenuItem>
	);
};

export default DeleteButton;
