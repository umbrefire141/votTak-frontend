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
import UpdateButton from './UpdateButton/UpdateButton';

const Actions = ({ id, setIsEdit }: IActionsComponent) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none p-1 transition-all duration-200 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground">
				<BsThreeDots className="w-4 h-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1.5 min-w-[140px]">
				<DropdownMenuLabel className="px-2 py-1 text-xs font-medium text-muted-foreground">
					Actions
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<UpdateButton setIsEdit={setIsEdit} />
				<DeleteButton id={id} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Actions;
