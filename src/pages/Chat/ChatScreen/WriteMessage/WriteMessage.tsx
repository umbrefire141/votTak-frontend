import { useSocket } from '@/shared/hooks/useSocket';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import EmojiPicker from 'emoji-picker-react';
import { FormEvent, useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { GoPaperclip } from 'react-icons/go';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
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
		<form onSubmit={writeMessageHandle} className="flex gap-3 p-4 relative">
			<Button variant="ghost" size="sm">
				<FaRegImage className="w-5 h-5" />
			</Button>
			<Button variant="ghost" size="sm">
				<GoPaperclip className="w-5 h-5" />
			</Button>
			<Button variant="ghost" size="sm">
				<MdOutlineEmojiEmotions className="w-5 h-5" />
			</Button>
			<Input
				placeholder="Write a message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<EmojiPicker open={false} />
		</form>
	);
};

export default WriteMessage;
