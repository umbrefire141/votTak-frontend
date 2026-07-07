import { useSocket } from '@/shared/hooks/useSocket';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { FormEvent, useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { IWriteMessageComponent } from './WriteMessage.interface';

const WriteMessage = ({ chatId, user_uuid }: IWriteMessageComponent) => {
	const [message, setMessage] = useState('');
	const socket = useSocket();

	const writeMessageHandle = (e: FormEvent) => {
		e.preventDefault();

		socket &&
			socket.emit('create_message', {
				message,
				chat_id: chatId,
				user_uuid,
			});
		{
			setMessage('');
		}
	};

	return (
		<form onSubmit={writeMessageHandle} className="flex items-center gap-2 p-3 border-t border-border/50 bg-muted/20">
			<Button variant="ghost" size="icon" className="w-9 h-9 text-muted-foreground hover:text-foreground">
				<FaRegImage className="w-4 h-4" />
			</Button>
			<Input
				placeholder="Write a message"
				value={message}
				onChange={e => setMessage(e.target.value)}
				className="flex-1 h-10 bg-background border-border/50 focus-visible:ring-primary/20 rounded-xl"
			/>
			<Button
				type="submit"
				size="icon"
				className="w-10 h-10 rounded-xl"
				disabled={!message.trim()}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
					<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
				</svg>
			</Button>
		</form>
	);
};

export default WriteMessage;
