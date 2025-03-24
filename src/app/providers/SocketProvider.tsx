import { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from '../context/SocketContext';

const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const userUuid = localStorage.getItem('user_uuid');
	const socketUrl = import.meta.env.VITE_SOCKET_API_URL;

	const socket = io(`${socketUrl}`, {
		query: { userUuid },
		withCredentials: true,
	});

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export default SocketProvider;
