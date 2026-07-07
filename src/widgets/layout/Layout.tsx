import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
	return (
		<>
			<Header />
			<div className="flex gap-6 container flex-col lg:flex-row pb-8">
				<Sidebar />
				<main className="flex-auto min-w-0 fade-in">
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
