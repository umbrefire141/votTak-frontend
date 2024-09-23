import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { BsThreeDots } from 'react-icons/bs';
import { IActionsComponent } from './Actions.interface';
import DeleteButton from './DeleteButton/DeleteButton';
import HideButton from './HideButton/HideButton';
import UpdateButton from './UpdateButton/UpdateButton';

const Actions = ({ uuid }: IActionsComponent) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none bg-secondary p-2 transition-colors rounded-sm w-8 h-8 hover:bg-destructive">
				<BsThreeDots />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<UpdateButton uuid={uuid} />
				<DeleteButton uuid={uuid} />
				<HideButton uuid={uuid} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Actions;
