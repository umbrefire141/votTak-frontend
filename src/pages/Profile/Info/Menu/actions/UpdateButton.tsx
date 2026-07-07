import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { IoSettings } from 'react-icons/io5';

const UpdateButton = () => {
	return (
		<DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-accent p-0">
			<Link to="/settings" className="flex items-center gap-3 px-2 py-2 text-sm w-full">
				<IoSettings className="w-4 h-4" />
				Settings
			</Link>
		</DropdownMenuItem>
	);
};

export default UpdateButton;
