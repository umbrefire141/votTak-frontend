import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
	const { logout } = useUserStore();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/auth/sign-in');
	};

	return (
		<Button variant="outline" onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutButton;
