import { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { NotificationsContext } from '../context/NotificationsContext';

const NotificationsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const userUuid = localStorage.getItem('user_uuid');
	const socketUrl = import.meta.env.VITE_NOTIFICATIONS_API_URL;

	const socket = io(`${socketUrl}`, {
		query: { userUuid },
		withCredentials: true,
	});

	return (
		<NotificationsContext.Provider value={socket}>
			{children}
		</NotificationsContext.Provider>
	);
};

export default NotificationsProvider;
