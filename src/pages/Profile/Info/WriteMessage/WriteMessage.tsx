import ChatService from '@/shared/api/chat/chat.service';
import { Button } from '@/shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog';
import { Textarea } from '@/shared/ui/textarea';
import { formatName } from '@/shared/utils/formatName';
import { useState } from 'react';
import { BiMessage } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { IWriteMessageComponent } from './WriteMessage.interface';

const WriteMessage = ({
	uuid,
	firstname,
	lastname,
}: IWriteMessageComponent) => {
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const createChat = () => {
		ChatService.createChat({ name: 'test', message, receiver_uuids: [uuid] });
		navigate('/chat');
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary" title="Write a message">
					<BiMessage className="w-5 h-5" />
				</Button>
			</DialogTrigger>
			<DialogContent className="flex flex-col sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Write a message</DialogTitle>
					<DialogDescription>
						{formatName(firstname, lastname)}
					</DialogDescription>
				</DialogHeader>
				<Textarea
					className="col-span-3"
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<DialogFooter>
					<Button type="submit" onClick={createChat}>
						Send
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default WriteMessage;
