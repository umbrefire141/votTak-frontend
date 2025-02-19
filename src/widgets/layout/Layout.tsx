import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
	return (
		<>
			<Header />
			<div className="flex gap-8 container flex-col lg:flex-row">
				<Sidebar />
				<main className="flex-auto">
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
