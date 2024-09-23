import { SocketContext } from '@/app/context/SocketContext';
import { useContext } from 'react';
import { Socket } from 'socket.io-client';

export const useSocket = (): Socket => {
	const context = useContext(SocketContext);

	if (!context) {
		throw new Error('useSocket must be used within a SocketProvider');
	}

	return context;
};
