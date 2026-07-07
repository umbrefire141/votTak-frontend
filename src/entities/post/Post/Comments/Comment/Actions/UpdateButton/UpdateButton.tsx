import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { BiPencil } from 'react-icons/bi';
import { IUpdateButtonComponent } from './UpdateButton.interface';

const UpdateButton = ({ setIsEdit }: IUpdateButtonComponent) => {
	return (
		<DropdownMenuItem
			className="cursor-pointer rounded-lg flex items-center gap-3 px-2 py-2 text-sm focus:bg-accent"
			onClick={() => setIsEdit(a => !a)}
		>
			<BiPencil className="w-4 h-4" />
			Edit
		</DropdownMenuItem>
	);
};

export default UpdateButton;
