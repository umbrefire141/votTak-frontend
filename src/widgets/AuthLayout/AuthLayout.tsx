import { useUserStore } from '@/shared/model/user.store';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AuthLayout() {
	const { user } = useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate('/');
	}, [user]);

	return (
		<div className="min-h-screen grid lg:grid-cols-2">
			<div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-primary via-purple-600 to-purple-800 p-12 relative overflow-hidden">
				<div className="absolute inset-0 bg-grid-white/10" />
				<div className="relative z-10 text-center">
					<h1 className="text-4xl font-bold text-white mb-4">
						Welcome Back
					</h1>
					<p className="text-lg text-white/80 max-w-md">
						Connect with friends, share moments, and discover what's happening in your world.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center p-6 sm:p-12">
				<div className="w-full max-w-sm">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
