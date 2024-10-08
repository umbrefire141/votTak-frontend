import usersService from '@/shared/api/users/users.service';
import { Button } from '@/shared/ui/button';
import { IAddFriend } from './AddFriend.interface';

const AddFriend = ({ uuid }: IAddFriend) => {
	const addFriend = () => {
		usersService.addFriend(uuid);
	};

	return <Button onClick={addFriend}>Add friend</Button>;
};

export default AddFriend;
