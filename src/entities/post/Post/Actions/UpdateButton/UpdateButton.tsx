import { Button } from '@/shared/ui/button';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { BiPencil } from 'react-icons/bi';
import { IUpdateButtonComponent } from './UpdateButton.interface';

const UpdateButton = ({ setIsEdit }: IUpdateButtonComponent) => {
	return (
		<DropdownMenuItem className="p-0">
			<Button variant="ghost" size="sm" onClick={() => setIsEdit(a => !a)}>
				<BiPencil className="w-5 h-5 mr-2" />
				Update
			</Button>
		</DropdownMenuItem>
	);
};

export default UpdateButton;
