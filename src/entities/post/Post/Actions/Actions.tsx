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

const Actions = ({ uuid, setIsEdit }: IActionsComponent) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none p-1.5 transition-all duration-200 rounded-lg hover:bg-accent hover:scale-105 active:scale-95 text-muted-foreground hover:text-foreground">
				<BsThreeDots className="w-5 h-5" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1.5 min-w-[160px]" align="end">
				<DropdownMenuLabel className="px-2 py-1 text-xs font-medium text-muted-foreground">
					Actions
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<UpdateButton setIsEdit={setIsEdit} />
				<DeleteButton uuid={uuid} />
				<HideButton uuid={uuid} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Actions;
