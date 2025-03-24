import { createContext } from 'react';
import { Socket } from 'socket.io-client';

export const NotificationsContext = createContext<Socket | null>(null);
