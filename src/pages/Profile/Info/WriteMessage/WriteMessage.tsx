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
				<Button variant="outline" size="icon" title="Write a message" className="w-9 h-9">
					<BiMessage className="w-4 h-4" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Send a message</DialogTitle>
					<DialogDescription>
						To {formatName(firstname, lastname)}
					</DialogDescription>
				</DialogHeader>
				<Textarea
					placeholder="Write your message..."
					className="min-h-[100px] resize-none"
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<DialogFooter>
					<Button onClick={createChat} disabled={!message.trim()}>
						Send message
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default WriteMessage;
