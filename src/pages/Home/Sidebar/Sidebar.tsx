import Users from '@/entities/user/container/Users/Users';
import { ISidebarComponent } from './Sidebar.interface';

const Sidebar = ({ users }: ISidebarComponent) => {
	return (
		<div className="w-full rounded-xl bg-card text-card-foreground border border-border/50 shadow-soft lg:max-w-96 overflow-hidden">
			{users && users.length > 0 && <Users users={users ? users : []} />}
		</div>
	);
};

export default Sidebar;
