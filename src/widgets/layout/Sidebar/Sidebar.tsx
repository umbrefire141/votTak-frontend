import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
	return (
		<aside className="flex-auto items-end p-4 shadow-sm rounded-lg min-h-16 mb-6 min-w-40 max-w-96 ">
			<SidebarLinks />
		</aside>
	);
};

export default Sidebar;
