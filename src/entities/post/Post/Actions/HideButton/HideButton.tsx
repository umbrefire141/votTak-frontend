import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { BiHide } from 'react-icons/bi';
import { IHideButtonComponent } from './HideButton.interface';

const HideButton = ({ uuid: _uuid }: IHideButtonComponent) => {
	return (
		<DropdownMenuItem
			className="cursor-pointer rounded-lg flex items-center gap-3 px-2 py-2 text-sm focus:bg-accent"
		>
			<BiHide className="w-4 h-4" />
			Hide
		</DropdownMenuItem>
	);
};

export default HideButton;
