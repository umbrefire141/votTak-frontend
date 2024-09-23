import { useUserStore } from '@/shared/model/user.store';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import clsx from 'clsx';
import { IMessagesComponent } from './Messages.interface';

const Messages = ({ messages }: IMessagesComponent) => {
	const { user } = useUserStore();

	return (
		<div className="w-full overflow-y-auto overflow-x-hidden flex flex-col">
			{messages &&
				messages.map(message => (
					<div
						key={message.id}
						className={clsx('flex flex-col gap-2 p-4 whitespace-pre-wrap', {
							['items-end']: user?.nickname === message.user.nickname,
							['items-start']: user?.nickname !== message.user.nickname,
						})}
					>
						<div className={'flex gap-3 items-center'}>
							<Avatar className="w-11 h-11">
								<AvatarImage src={message.user.avatar?.photo?.image} />
								<AvatarFallback></AvatarFallback>
							</Avatar>
							<div className="bg-accent p-3 rounded-md max-w-xs">
								<div>{message.message}</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Messages;
