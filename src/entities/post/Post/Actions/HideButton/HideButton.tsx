import { Button } from '@/shared/ui/button';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { BiHide } from 'react-icons/bi';
import { IHideButtonComponent } from './HideButton.interface';

const HideButton = ({ uuid }: IHideButtonComponent) => {
	console.log(uuid);

	return (
		<DropdownMenuItem className="p-0">
			<Button variant="ghost" size="sm">
				<BiHide className="w-5 h-5 mr-2" />
				Hide
			</Button>
		</DropdownMenuItem>
	);
};

export default HideButton;
