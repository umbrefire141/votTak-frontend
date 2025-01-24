import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const UpdateButton = () => {
	return (
		<DropdownMenuItem className="cursor-pointer">
			<Link to="/settings">Settings</Link>
		</DropdownMenuItem>
	);
};

export default UpdateButton;
