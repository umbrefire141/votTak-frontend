import { useUserStore } from '@/shared/model/user.store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import clsx from 'clsx';
import { IMessagesComponent } from './Messages.interface';

const Messages = ({ messages }: IMessagesComponent) => {
	const { user } = useUserStore();

	return (
		<div className="w-full overflow-y-auto overflow-x-hidden flex flex-col p-4 gap-2">
			{messages &&
				messages.map(message => {
					const isOwn = user?.nickname === message.user.nickname;
					return (
						<div
							key={message.id}
							className={clsx('flex gap-2 max-w-[80%]', {
								['self-end flex-row-reverse']: isOwn,
							})}
						>
							<Avatar className="w-8 h-8 mt-1 flex-shrink-0">
								<AvatarImage src={message.user.avatar?.photo?.image} />
								<AvatarFallback className="bg-primary/10 text-primary text-xs">
									{message.user.firstname?.[0]}
								</AvatarFallback>
							</Avatar>
							<div
								className={clsx('px-4 py-2.5 rounded-2xl text-sm leading-relaxed', {
									['bg-gradient-to-r from-primary to-purple-500 text-white rounded-tr-sm']: isOwn,
									['bg-accent text-foreground rounded-tl-sm']: !isOwn,
								})}
							>
								{message.message}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Messages;
