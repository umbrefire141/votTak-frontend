import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { BiBlock } from 'react-icons/bi';

const BlockButton = () => {
	return (
		<DropdownMenuItem className="cursor-pointer rounded-lg flex items-center gap-3 px-2 py-2 text-sm text-destructive focus:bg-destructive/10">
			<BiBlock className="w-4 h-4" />
			Block
		</DropdownMenuItem>
	);
};

export default BlockButton;
