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
			<DropdownMenuTrigger className="outline-none bg-secondary p-2 transition-colors rounded-sm w-10 h-10 hover:bg-slate-300">
				<BsThreeDots className="inline w-5 h-5" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
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
