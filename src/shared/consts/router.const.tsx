import ChatPage from '@/pages/Chat/Chat';
import ProfilePage from '@/pages/Profile/Profile';
import RegistrationPage from '@/pages/Registration/Registration';
import SettingsPage from '@/pages/Settings/Settings';
import { ReactNode } from 'react';
import HomePage from '../../pages/Home/Home';
import LoginPage from '../../pages/Login/Login';

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

export const routerWithoutAuthorization: Router[] = [
	{
		path: '/sign-in',
		element: <LoginPage />,
	},
	{
		path: '/sign-up',
		element: <RegistrationPage />,
	},
];
