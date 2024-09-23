import { useUserStore } from '@/shared/model/user.store';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
	const { getMe, loading, error, user } = useUserStore();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!user) getMe();
	// }, [user]);

	// useEffect(() => {
	// 	if (error) navigate('/sign-in');
	// }, [error]);

	// if (loading) {
	// 	return <p>loading...</p>;
	// }

	return (
		<>
			<Header />
			<div className="flex gap-5 container">
				<Sidebar />
				<main className="flex-auto">
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default Layout;
