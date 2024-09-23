import { useUserStore } from '@/shared/model/user.store';
import { useEffect } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AuthLayout() {
	const { user } = useUserStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate('/');
	}, [user]);

	return (
		<div className="container h-screen flex justify-between items-center gap-4 flex-wrap mt-5">
			<div className="flex-auto">
				<BiLogIn className="w-60 h-60" />
			</div>
			<div className="p-4 flex-1">
				<Outlet />
			</div>
		</div>
	);
}
