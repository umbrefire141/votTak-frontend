import LoginPage from '@/pages/Auth/Login/Login';
import RegistrationPage from '@/pages/Auth/Registration/Registration';
import ChatPage from '@/pages/Chat/Chat';
import ProfilePage from '@/pages/Profile/Profile';
import SettingsPage from '@/pages/Settings/Settings';
import { ReactNode } from 'react';
import HomePage from '../../pages/Home/Home';

type Router = {
	path: string;
	element: ReactNode;
};

export const routersWithAuthorization: Router[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/profile/:uuid',
		element: <ProfilePage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
	{
		path: '/chat',
		element: <ChatPage />,
	},
];

export const routerAuth: Router[] = [
	{
		path: '/auth/sign-in',
		element: <LoginPage />,
	},
	{
		path: '/auth/sign-up',
		element: <RegistrationPage />,
	},
];
