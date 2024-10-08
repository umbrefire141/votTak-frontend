import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';

const ButtonDeleteAccount = () => {
	const { deleteAccount } = useUserStore();

	return (
		<div>
			<Button
				variant="destructive"
				className="w-full"
				onClick={() => deleteAccount()}
			>
				Delete account
			</Button>
		</div>
	);
};

export default ButtonDeleteAccount;
