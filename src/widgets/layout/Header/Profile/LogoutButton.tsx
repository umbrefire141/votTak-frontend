import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';

const LogoutButton = () => {
	const { logout } = useUserStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<Button variant="outline" onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutButton;
