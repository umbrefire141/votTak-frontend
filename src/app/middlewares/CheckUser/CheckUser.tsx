import Loader from '@/shared/components/Loader/Loader';
import { useUserStore } from '@/shared/model/user.store';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckUser({ children }: PropsWithChildren) {
	const { getMe, loading, error, user } = useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) getMe();
	}, [user]);

	useEffect(() => {
		if (error) navigate('/auth/sign-in');
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
