import Loader from '@/shared/components/Loader/Loader';
import { useUserStore } from '@/shared/model/user.store';
import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckUser({ children }: PropsWithChildren) {
	const { getMe, loading, error, user, clearUserState } = useUserStore();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (!user && !pathname.startsWith('/auth')) getMe();
	}, [user]);

	useEffect(() => {
		if (!user && error) {
			clearUserState();
			navigate('/auth/sign-in');
		}
	}, [error]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loader height="160px" width="160px" />;
			</div>
		);
	}

	return <>{children}</>;
}
