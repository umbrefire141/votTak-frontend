import { useUserStore } from '@/shared/model/user.store';
import { BiLogOut } from 'react-icons/bi';

const LogoutButton = () => {
	const { logout } = useUserStore();

	return (
		<button
			onClick={logout}
			className="flex items-center gap-3 w-full py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
		>
			<BiLogOut className="w-4 h-4" />
			Logout
		</button>
	);
};

export default LogoutButton;
