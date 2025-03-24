import { NotificationsContext } from '@/app/context/NotificationsContext';
import { useContext } from 'react';
import { Socket } from 'socket.io-client';

export const useNotifications = (): Socket => {
	const context = useContext(NotificationsContext);

	if (!context) {
		throw new Error('useSocket must be used within a SocketProvider');
	}

	return context;
};
