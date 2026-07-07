import { useUserStore } from '@/shared/model/user.store';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { BsThreeDots } from 'react-icons/bs';
import { IMenu } from './Menu.interface';
import BlockButton from './actions/BlockButton';
import DeleteButton from './actions/DeleteButton';
import UpdateButton from './actions/UpdateButton';

const Menu = ({ uuid }: IMenu) => {
	const { user } = useUserStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none p-1.5 transition-all duration-200 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground">
				<BsThreeDots className="w-5 h-5" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1.5 min-w-[160px]">
				<DropdownMenuLabel className="px-2 py-1 text-xs font-medium text-muted-foreground">
					Actions
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{user?.uuid === uuid ? (
					<>
						<UpdateButton />
						<DeleteButton />
					</>
				) : (
					<BlockButton />
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
