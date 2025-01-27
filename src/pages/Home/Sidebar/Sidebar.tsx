import Users from '@/entities/user/container/Users/Users';
import { ISidebarComponent } from './Sidebar.interface';

const Sidebar = ({ users }: ISidebarComponent) => {
	return (
		<div className="w-full p-5 shadow-sm rounded-lg bg-card text-card-foreground border lg:max-w-96">
			{users && users.length > 0 && <Users users={users ? users : []} />}
		</div>
	);
};

export default Sidebar;
